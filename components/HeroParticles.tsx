"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Ambient dust: points scattered through a spherical shell. */
function ParticleField({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.4 + Math.random() * 2.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (reduced || !ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.012;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ff4d5e"
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Slow-drifting wireframe core that sits far behind the logo. */
function WireCore({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (reduced || !ref.current) return;
    ref.current.rotation.y -= delta * 0.05;
    ref.current.rotation.z += delta * 0.02;
  });

  return (
    <mesh ref={ref} scale={2.3}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#ff3b4a"
        wireframe
        transparent
        opacity={0.32}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function Scene({ count, reduced }: { count: number; reduced: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (reduced || !group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.35 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y * 0.35 - group.current.rotation.x) * 0.04;
  });

  return (
    <group ref={group}>
      <WireCore reduced={reduced} />
      <ParticleField count={count} reduced={reduced} />
    </group>
  );
}

export function HeroParticles() {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(2400);

  useEffect(() => {
    setCount(window.innerWidth < 768 ? 1100 : 2400);
  }, []);

  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
      aria-hidden
    >
      <Scene count={count} reduced={reduced} />
    </Canvas>
  );
}
