"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Ambient data streams: points flowing upward through space. */
function ParticleField({ count, reduced }: { count: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Scatter in a wide cylinder
      const radius = Math.random() * 4;
      const angle = Math.random() * Math.PI * 2;
      arr[i * 3] = radius * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y from -5 to 5
      arr[i * 3 + 2] = radius * Math.sin(angle);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (reduced || !ref.current) return;
    
    // Smooth rotation of the whole field
    ref.current.rotation.y += delta * 0.02;

    // Upward flow for each particle
    const posAttribute = ref.current.geometry.attributes.position;
    const array = posAttribute.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      array[i * 3 + 1] += delta * (0.1 + Math.random() * 0.1); // Move Y up at slight random speeds
      if (array[i * 3 + 1] > 5) {
        array[i * 3 + 1] = -5; // Loop back to bottom
      }
    }
    posAttribute.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ff2233"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** High-tech intersecting orbital rings to match the SVG logo network rings. */
function OrbitalRings({ reduced }: { reduced: boolean }) {
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  const ref3 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (reduced) return;
    if (ref1.current) {
      ref1.current.rotation.x += delta * 0.15;
      ref1.current.rotation.y += delta * 0.1;
    }
    if (ref2.current) {
      ref2.current.rotation.x -= delta * 0.1;
      ref2.current.rotation.z += delta * 0.15;
    }
    if (ref3.current) {
      ref3.current.rotation.y += delta * 0.2;
      ref3.current.rotation.z -= delta * 0.1;
    }
  });

  const matProps = {
    color: "#ff2233",
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  };

  return (
    <group scale={1.8}>
      <mesh ref={ref1}>
        <torusGeometry args={[1.5, 0.005, 16, 64]} />
        <meshBasicMaterial {...matProps} opacity={0.4} />
      </mesh>
      <mesh ref={ref2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.2, 0.005, 16, 64]} />
        <meshBasicMaterial {...matProps} opacity={0.6} />
      </mesh>
      <mesh ref={ref3} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[0.9, 0.008, 16, 64]} />
        <meshBasicMaterial {...matProps} opacity={0.8} />
      </mesh>
    </group>
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
      <OrbitalRings reduced={reduced} />
      <ParticleField count={count} reduced={reduced} />
    </group>
  );
}

export function HeroParticles() {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(1500);

  useEffect(() => {
    setCount(window.innerWidth < 768 ? 600 : 1500);
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

