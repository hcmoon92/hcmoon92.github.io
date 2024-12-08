import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Room({ wallTextures }) {
  const createWall = (position, rotation, texture) => (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial map={new THREE.TextureLoader().load(texture)} />
    </mesh>
  );

  return (
    <group>
      {createWall([0, 5, -5], [0, 0, 0], wallTextures.back)} // Back wall
      {createWall([0, 5, 5], [0, Math.PI, 0], wallTextures.front)} // Front wall
      {createWall([-5, 5, 0], [0, Math.PI / 2, 0], wallTextures.left)} // Left wall
      {createWall([5, 5, 0], [0, -Math.PI / 2, 0], wallTextures.right)} // Right wall
      {createWall([0, 10, 0], [-Math.PI / 2, 0, 0], wallTextures.ceiling)} // Ceiling
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial map={new THREE.TextureLoader().load(wallTextures.floor)} />
      </mesh>
    </group>
  );
}

export default function App() {
  return (
    <Canvas
      style={{ height: "100vh", background: "black" }}
      camera={{ position: [0, 5, 15], fov: 50 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={true} enablePan={true} />
      <Room
        wallTextures={{
          front: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpg",
          back: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpg",
          left: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpg",
          right: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpg",
          ceiling: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpg",
          floor: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4464.jpg",
        }}
      />
    </Canvas>
  );
}
