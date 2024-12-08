// App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

function MuseumRoom({ position, color, label }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={color} />
      <Html position={[0, 2.5, 0]}>
        <div style={{ color: "white", textAlign: "center" }}>{label}</div>
      </Html>
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas
      style={{ height: "100vh", background: "black" }}
      camera={{ position: [0, 5, 10], fov: 60 }}
    >
      {/* 빛 추가 */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={true} />
      
      {/* 방 추가 */}
      <MuseumRoom position={[-6, 0, 0]} color="lightblue" label="Ancient Art" />
      <MuseumRoom position={[0, 0, 0]} color="lightgreen" label="Modern Art" />
      <MuseumRoom position={[6, 0, 0]} color="lightcoral" label="Futuristic Art" />
      
      {/* 바닥 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#555" />
      </mesh>
    </Canvas>
  );
}
