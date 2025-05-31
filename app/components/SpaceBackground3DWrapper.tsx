"use client";
import dynamic from "next/dynamic";

// สร้าง spinner ง่ายๆ
function Spinner() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: -20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a1124"
    }}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white" />
    </div>
  );
}

// const SpaceBackground3D = dynamic(() => import("./SpaceBackground3D"), { ssr: false });
const SpaceBackground3D = dynamic(() => import("./SpaceBackground3D"), {
  ssr: false,
  loading: () => <Spinner />
});

export default function SpaceBackground3DWrapper() {
  return <SpaceBackground3D />;
}
