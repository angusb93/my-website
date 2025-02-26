"use client";

import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { a, useSpring } from "@react-spring/three";

const HeadModel = () => {
  const { scene } = useGLTF("/models/maHead.glb"); // Ensure correct path
  const headRef = useRef<THREE.Group>(null);
  const { scene: threeScene, mouse } = useThree();
  const texture = useLoader(THREE.TextureLoader, "/world.png");

  // Apply environment texture for reflections
  useEffect(() => {
    if (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      threeScene.environment = texture;
    }
  }, [texture, threeScene]);

  // Adjust material roughness for all meshes in the model
  useEffect(() => {
    scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.material.roughness = 0.3;
      }
    });
  }, [scene]);

  // State to track animation progress
  const [animationComplete, setAnimationComplete] = useState(false);
  const [baseRotation, setBaseRotation] = useState([0, 0, 0]);

  // Trigger the spring animation after a 1-second delay.
  // Using an extra state variable "animate" to force the spring to run.
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Spring animation using "from" and "to".
  const { pos, rot } = useSpring({
    from: { pos: [0, -1, 3], rot: [0, Math.PI, 0] },
    to: animate
      ? { pos: [0, 0, -2], rot: [0, Math.PI * 3, 0] }
      : { pos: [0, -1, 3], rot: [0, Math.PI, 0] },
    config: { mass: 1, tension: 180, friction: 60 },
    onRest: () => {
      // Only set animationComplete when the intended animation has run.
      if (animate) {
        setAnimationComplete(true);
        setBaseRotation([0, Math.PI * 3, 0]);
      }
    },
  });

  // Once animation is complete, update the head's rotation based on mouse movement.
  useFrame(() => {
    if (animationComplete && headRef.current) {
      headRef.current.rotation.x = baseRotation[0] + mouse.y * -0.3;
      headRef.current.rotation.y = baseRotation[1] + mouse.x * 0.3;
      headRef.current.rotation.z = baseRotation[2];
    }
  });

  return (
    <a.primitive
      ref={headRef}
      object={scene}
      scale={1}
      position={pos}
      // Use spring-controlled rotation only until animationComplete is true.
      rotation={animationComplete ? undefined : rot}
    />
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
