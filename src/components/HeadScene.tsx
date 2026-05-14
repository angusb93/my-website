"use client";

import { useSpring } from "@react-spring/three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Model } from "./Model";

const HEAD_MATERIAL_ROUGHNESS = 0.25;
const ANIMATION_START_DELAY_MS = 1000;
const MOUSE_ROTATION_FACTOR = 0.3;
const ROTATION_LERP_SPEED = 0.1;
const SPRING_FROM_POSITION: [number, number, number] = [0, -1, 3];
const SPRING_FROM_ROTATION: [number, number, number] = [0, Math.PI, 0];
const SPRING_TO_POSITION: [number, number, number] = [0, 0, -2];
const SPRING_TO_ROTATION: [number, number, number] = [0, Math.PI * 3, 0];
const CAMERA_POSITION: [number, number, number] = [0, 0, 5];
const CAMERA_FOV = 50;
const AMBIENT_LIGHT_INTENSITY = 0.5;
const DIRECTIONAL_LIGHT_INTENSITY = 1;
const DIRECTIONAL_LIGHT_POSITION: [number, number, number] = [3, 5, 3];
const SPRING_CONFIG = { mass: 1, tension: 180, friction: 60 };

/**
 * Inner 3D head model with mouse-tracking rotation and entrance spring animation.
 * @param mouseRef - Ref containing normalised mouse coordinates in [-1, 1] range.
 */
function HeadModel({
  mouseRef,
}: {
  mouseRef: React.RefObject<{ x: number; y: number }>;
}) {
  const headRef = useRef<THREE.Group>(null);
  const { scene: threeScene } = useThree();
  const texture = useLoader(THREE.TextureLoader, "/world.jpg");

  useEffect(() => {
    if (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      threeScene.environment = texture;
    }
  }, [texture, threeScene]);

  useEffect(() => {
    if (headRef.current) {
      headRef.current.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.roughness = HEAD_MATERIAL_ROUGHNESS;
        }
      });
    }
  }, []);

  const [animationComplete, setAnimationComplete] = useState(false);
  const [baseRotation, setBaseRotation] = useState([0, 0, 0]);

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(
      () => setAnimate(true),
      ANIMATION_START_DELAY_MS,
    );
    return () => clearTimeout(timeout);
  }, []);

  const { pos, rot } = useSpring({
    from: { pos: SPRING_FROM_POSITION, rot: SPRING_FROM_ROTATION },
    to: animate
      ? { pos: SPRING_TO_POSITION, rot: SPRING_TO_ROTATION }
      : { pos: SPRING_FROM_POSITION, rot: SPRING_FROM_ROTATION },
    config: SPRING_CONFIG,
    onRest: () => {
      if (animate) {
        setAnimationComplete(true);
        setBaseRotation([0, Math.PI * 3, 0]);
      }
    },
  });

  useFrame(() => {
    if (!headRef.current) {
      return;
    }

    const [px, py, pz] = pos.get();
    headRef.current.position.set(px, py, pz);

    if (animationComplete) {
      const targetX =
        baseRotation[0] + (mouseRef.current?.y ?? 0) * -MOUSE_ROTATION_FACTOR;
      const targetY =
        baseRotation[1] + (mouseRef.current?.x ?? 0) * MOUSE_ROTATION_FACTOR;
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetX,
        ROTATION_LERP_SPEED,
      );
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetY,
        ROTATION_LERP_SPEED,
      );
      headRef.current.rotation.z = baseRotation[2];
    } else {
      const [rx, ry, rz] = rot.get();
      headRef.current.rotation.set(rx, ry, rz);
    }
  });

  return (
    <group ref={headRef} scale={1}>
      <Model />
    </group>
  );
}

/**
 * Full-screen R3F canvas containing the animated 3D head scene.
 * @param mouseRef - Ref containing normalised mouse coordinates in [-1, 1] range.
 */
function HeadScene({
  mouseRef,
}: {
  mouseRef: React.RefObject<{ x: number; y: number }>;
}) {
  return (
    <Canvas camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}>
      <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
      <directionalLight
        position={DIRECTIONAL_LIGHT_POSITION}
        intensity={DIRECTIONAL_LIGHT_INTENSITY}
      />
      <HeadModel mouseRef={mouseRef} />
    </Canvas>
  );
}

export default HeadScene;
