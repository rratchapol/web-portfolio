"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Box() {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4f46e5" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

export default function ThreeDemo() {
  return (
    <div style={{ width: "100%", height: 400, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 32px #0006", background: "#181e2a", margin: "auto" }}>
      <Canvas shadows camera={{ position: [2, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <Suspense fallback={null}>
          {/* Remove Environment preset to avoid HDR fetch error */}
          {/* <Environment preset="city" /> */}
        </Suspense>
        <Box />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
