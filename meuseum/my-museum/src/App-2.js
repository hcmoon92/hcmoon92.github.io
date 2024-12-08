// App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

function MuseumRoom({ position, color, label, wallTextures }) {
  const createWall = (position, rotation, texture) => (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial map={new THREE.TextureLoader().load(texture)} />
    </mesh>
  );

  return (
    <group position={position}>
      {/* Walls */}
      {createWall([0, 2, -2], [0, 0, 0], wallTextures.back)}  {/* Back Wall */}
      {createWall([0, 2, 2], [0, Math.PI, 0], wallTextures.front)} {/* Front Wall */}
      {createWall([-2, 2, 0], [0, Math.PI / 2, 0], wallTextures.left)} {/* Left Wall */}
      {createWall([2, 2, 0], [0, -Math.PI / 2, 0], wallTextures.right)} {/* Right Wall */}

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Label */}
      <Html position={[0, 4.5, 0]}>
        <div style={{ color: "white", textAlign: "center" }}>{label}</div>
      </Html>
    </group>
  );
}

export default function App() {
  return (
    <Canvas
      style={{ height: "100vh", background: "black" }}
      camera={{ position: [0, 5, 15], fov: 60 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={true} />

      {/* Rooms */}
      <MuseumRoom
        position={[-6, 0, 0]}
        color="lightblue"
        label="Ancient Art"
        wallTextures={{
          front: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpg",
          back: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpgg",
          left: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpg",
          right: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpg",
        }}
      />
      <MuseumRoom
        position={[0, 0, 0]}
        color="lightgreen"
        label="Modern Art"
        wallTextures={{
          front: "/textures/modern/front.jpg",
          back: "/textures/modern/back.jpg",
          left: "/textures/modern/left.jpg",
          right: "/textures/modern/right.jpg",
        }}
      />
      <MuseumRoom
        position={[6, 0, 0]}
        color="lightcoral"
        label="Futuristic Art"
        wallTextures={{
          front: "/textures/futuristic/front.jpg",
          back: "/textures/futuristic/back.jpg",
          left: "/textures/futuristic/left.jpg",
          right: "/textures/futuristic/right.jpg",
        }}
      />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#555" />
      </mesh>
    </Canvas>
  );
}
