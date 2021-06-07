import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./model";

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
export default App;
