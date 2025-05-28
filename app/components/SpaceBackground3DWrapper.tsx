"use client";
import dynamic from "next/dynamic";

const SpaceBackground3D = dynamic(() => import("./SpaceBackground3D"), { ssr: false });

export default function SpaceBackground3DWrapper() {
  if (typeof window === "undefined") return null;
  return <SpaceBackground3D />;
}
