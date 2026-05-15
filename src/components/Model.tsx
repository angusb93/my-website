import { useGLTF } from "@react-three/drei";
import type React from "react";

export function Model(props: React.ComponentProps<"group">) {
  const { scene } = useGLTF("/models/maHead.glb");
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/maHead.glb");
