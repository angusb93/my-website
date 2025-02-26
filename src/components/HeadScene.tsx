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
        child.material.roughness = 0.2;
      }
    });
  }, [scene]);

  // State to track when the initial animation is complete
  const [animationComplete, setAnimationComplete] = useState(false);
  // We'll store the final (base) rotation here to which we add the mouse offset
  const [baseRotation, setBaseRotation] = useState([0, 0, 0]);

  // Use an extra state variable "animate" to trigger the spring after a delay
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Spring animation for initial movement & rotation.
  const { pos, rot } = useSpring({
    from: { pos: [0, -1, 3], rot: [0, Math.PI, 0] },
    to: animate
      ? { pos: [0, 0, -2], rot: [0, Math.PI * 3, 0] }
      : { pos: [0, -1, 3], rot: [0, Math.PI, 0] },
    config: { mass: 1, tension: 180, friction: 60 },
    onRest: () => {
      if (animate) {
        setAnimationComplete(true);
        // Save the final rotation as the base rotation for mouse-following.
        setBaseRotation([0, Math.PI * 3, 0]);
      }
    },
  });

  // Once animation is complete, use a lerp to smoothly transition to the new rotation based on mouse position.
  useFrame(() => {
    if (animationComplete && headRef.current) {
      // Calculate the desired target rotation based on the base rotation plus a small offset from the mouse.
      const targetX = baseRotation[0] + mouse.y * -0.3;
      const targetY = baseRotation[1] + mouse.x * 0.1;
      // Lerp from the current rotation to the target rotation for a smooth transition.
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetX,
        0.1
      );
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetY,
        0.1
      );
      headRef.current.rotation.z = baseRotation[2];
    }
  });

  return (
    <a.primitive
      ref={headRef}
      object={scene}
      scale={1}
      position={pos}
      // While the initial animation is active, use the spring's rotation.
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
