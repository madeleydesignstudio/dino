"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Cube3DProps {
  size?: number;
  color?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

function AnimatedCube({
  size = 1,
  color = "#D9E0C1",
  autoRotate = true,
  rotationSpeed = 0.01,
}: Cube3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create geometry and material
  const geometry = useMemo(
    () => new THREE.BoxGeometry(size, size, size),
    [size],
  );

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        metalness: 0.0,
        roughness: 0.6,
        flatShading: false,
      }),
    [color],
  );

  // Create edges geometry for subtle definition
  const edgesGeometry = useMemo(
    () => new THREE.EdgesGeometry(geometry),
    [geometry],
  );

  const edgeMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: "#e0e0e0",
        transparent: true,
        opacity: 0.3,
      }),
    [],
  );

  // Animation loop
  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.x += rotationSpeed * 1.2;
      meshRef.current.rotation.y += rotationSpeed * 0.8;
      meshRef.current.rotation.z += rotationSpeed * 0.4;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh geometry={geometry} material={material} />
      <lineSegments geometry={edgesGeometry} material={edgeMaterial} />
    </group>
  );
}

export function Cube3D({
  size = 60,
  color = "#D9E0C1",
  autoRotate = true,
  rotationSpeed = 0.01,
}: Cube3DProps) {
  // Convert size from pixels to Three.js units
  const cubeSize = size / 60; // Normalize to make 60px = 1 unit

  return (
    <div style={{ width: size, height: size }}>
      <Canvas
        camera={{
          position: [3, 3, 3],
          fov: 50,
        }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <directionalLight position={[-5, -5, 5]} intensity={0.4} />
        <pointLight position={[0, 0, 5]} intensity={0.6} />
        <pointLight position={[0, 0, -5]} intensity={0.4} />
        <AnimatedCube
          size={cubeSize}
          color={color}
          autoRotate={autoRotate}
          rotationSpeed={rotationSpeed}
        />
      </Canvas>
    </div>
  );
}
