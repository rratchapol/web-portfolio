"use client";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Group } from "three";

// ข้อมูลดาวแต่ละดวง (ชื่อ, texture, รัศมีวงโคจร, ขนาด, ความเร็ว)
const planets = [
	{
		name: "Sun",
		texture: "/image/univers/sun_color.jpg",
		size: 1.5,
		orbit: 0,
		speed: 0,
	},
	{
		name: "Earth",
		texture: "/image/univers/earth_color.jpg",
		size: 0.38,
		orbit: 5.5,
		speed: 1,
	},
	{
		name: "Mars",
		texture: "/image/univers/mars_color.jpg",
		size: 0.32,
		orbit: 6.7,
		speed: 0.8,
	},
	{
		name: "Jupiter",
		texture: "/image/univers/jupiter_color.jpg",
		size: 0.8,
		orbit: 8.5,
		speed: 0.5,
	},
	{
		name: "Venus",
		texture: "/image/univers/venus_color.jpg",
		size: 0.35,
		orbit: 4.2,
		speed: 1.2,
	},
	{
		name: "Moon",
		texture: "/image/univers/moon_color.jpg",
		size: 0.18,
		orbit: 7.2,
		speed: 1.7,
	},
	{
		name: "Star",
		texture: "/image/univers/star_color.jpg",
		size: 0.2,
		orbit: 10,
		speed: 0.2,
	},
];

function PlanetarySystem() {
	// โหลด texture ทุกดวง
	const textures = useLoader(THREE.TextureLoader, planets.map((p) => p.texture));
	const groups = useRef<Array<THREE.Group | null>>([]);
	useFrame(({ clock }) => {
		planets.forEach((planet, i) => {
			if (planet.orbit > 0 && groups.current[i]) {
				(groups.current[i] as Group).rotation.y = clock.getElapsedTime() * planet.speed;
			}
		});
	});
	return (
		<group>
			{planets.map((planet, i) =>
				planet.orbit === 0 ? (
					// Sun (ศูนย์กลาง)
					<mesh key={planet.name} position={[0, 0, 0]}>
						<sphereGeometry args={[planet.size, 64, 64]} />
						<meshStandardMaterial
							map={textures[i]}
							emissive="#fff200"
							emissiveIntensity={0.5}
						/>
					</mesh>
				) : (
					// ดาวเคราะห์
					<group key={planet.name} ref={(el) => (groups.current[i] = el)}>
						<mesh position={[planet.orbit, 0, 0]}>
							<sphereGeometry args={[planet.size, 48, 48]} />
							<meshStandardMaterial map={textures[i]} />
						</mesh>
					</group>
				)
			)}
		</group>
	);
}

function Stars() {
	const [positions, setPositions] = useState<Float32Array | null>(null);
	useEffect(() => {
		const arr = new Float32Array(1000 * 3);
		for (let i = 0; i < 1000 * 3; i++) {
			arr[i] = (Math.random() - 0.5) * 80;
		}
		setPositions(arr);
	}, []);
	if (!positions) return null;
	return (
		<points>
			<bufferGeometry attach="geometry">
				<bufferAttribute attach="attributes-position" args={[positions, 3]} />
			</bufferGeometry>
			<pointsMaterial color="#fff" size={0.25} sizeAttenuation />
		</points>
	);
}

export default function SpaceBackground3D() {
	return (
		<div style={{ position: "fixed", inset: 0, zIndex: -20 }}>
			<Canvas
				camera={{ position: [0, 5, 22], fov: 40 }}
				dpr={[1, 2]}
				style={{ width: "100vw", height: "100vh" }}
			>
				<ambientLight intensity={0.6} color="#bcd1ff" />
				<directionalLight
					position={[10, 15, 20]}
					intensity={1.5}
					color="#fff"
					castShadow
				/>
				<PlanetarySystem />
				<Stars />
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					autoRotate
					autoRotateSpeed={0.25}
				/>
				<Preload all />
			</Canvas>
		</div>
	);
}
