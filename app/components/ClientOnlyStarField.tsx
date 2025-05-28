"use client";
import { ReactNode, useEffect, useState } from "react";

export default function ClientOnlyStarField() {
  const [stars, setStars] = useState<ReactNode[]>([]);
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      // Random size between 2px and 4px only (no big stars)
      const size = 2 + Math.random() * 2;
      arr.push(
        <div
          key={i}
          className="star absolute bg-white rounded-full opacity-70"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${3 + Math.random() * 5}s infinite`,
          }}
        />
      );
    }
    setStars(arr);
  }, []);
  return <div className="star-field absolute inset-0 pointer-events-none z-0">{stars}</div>;
}
