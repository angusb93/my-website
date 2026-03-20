"use client";

import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { a, useSpring } from "@react-spring/three";
import { Model } from "./Model";

const HeadModel = () => {
  const headRef = useRef<THREE.Group>(null);
  const { scene: threeScene, pointer } = useThree();
  const texture = useLoader(THREE.TextureLoader, "/world.png");

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
          child.material.roughness = 0.25;
        }
      });
    }
  }, []);

  const [animationComplete, setAnimationComplete] = useState(false);
  const [baseRotation, setBaseRotation] = useState([0, 0, 0]);

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const { pos, rot } = useSpring({
    from: { pos: [0, -1, 3], rot: [0, Math.PI, 0] },
    to: animate
      ? { pos: [0, 0, -2], rot: [0, Math.PI * 3, 0] }
      : { pos: [0, -1, 3], rot: [0, Math.PI, 0] },
    config: { mass: 1, tension: 180, friction: 60 },
    onRest: () => {
      if (animate) {
        setAnimationComplete(true);
        setBaseRotation([0, Math.PI * 3, 0]);
      }
    },
  });

  useFrame(() => {
    if (animationComplete && headRef.current) {
      const targetX = baseRotation[0] + pointer.y * -0.3;
      const targetY = baseRotation[1] + pointer.x * 0.3;
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetX,
        0.1,
      );
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetY,
        0.1,
      );
      headRef.current.rotation.z = baseRotation[2];
    }
  });

  return (
    <a.group
      ref={headRef}
      scale={1}
      position={pos as any}
      rotation={animationComplete ? undefined : (rot as any)}
    >
      <Model />
    </a.group>
  );
};

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 3]} intensity={1} />
      <HeadModel />
    </Canvas>
  );
};

export default App;
