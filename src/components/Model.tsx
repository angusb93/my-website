import { useGLTF } from "@react-three/drei";
import type React from "react";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  scene: THREE.Group;
};

export function Model(props: React.ComponentProps<"group">) {
  const { scene } = useGLTF("/models/maHead.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/maHead.glb");
