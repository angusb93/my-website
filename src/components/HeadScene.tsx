"use client";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { a, useSpring } from "@react-spring/three";

const HeadModel = () => {
  const { scene } = useGLTF("/models/maHead.glb"); // Ensure correct path
  const headRef = useRef<THREE.Group>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  // Load environment texture for reflections
  const { scene: threeScene } = useThree();
  const texture = useLoader(THREE.TextureLoader, "/world.png");

  useEffect(() => {
    if (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      threeScene.environment = texture; // Apply reflections
    }

    // Start animation after 1 second
    setTimeout(() => setStartAnimation(true), 1000);
  }, [texture, threeScene]);

  const { pos, rot } = useSpring({
    from: { pos: [0, -1, 3], rot: [0, Math.PI, 0] },
    to: {
      pos: [0, 0, -2],
      rot: [0, Math.PI * 3, 0],
    },
    config: { mass: 1, tension: 180, friction: 60 },
  });
  console.log("positionZ", pos);
  console.log("rotationY", rot);

  return (
    <a.primitive
      ref={headRef}
      object={scene}
      scale={1}
      position={pos}
      rotation={rot}
    />
  );
};

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 3]} intensity={1} />

      {/* 3D Head Model */}
      <HeadModel />
    </Canvas>
  );
};

export default App;
