"use client";
import dynamic from "next/dynamic";

// const SpaceBackground3D = dynamic(() => import("./SpaceBackground3D"), { ssr: false });
const SpaceBackground3D = dynamic(() => import("./SpaceBackground3D"), {
  ssr: false,
  loading: () => <div style={{
    position: "fixed",
    inset: 0,
    zIndex: -20,
    background: "#0a1124"
  }} />
});

export default function SpaceBackground3DWrapper() {
  return <SpaceBackground3D />;
}
