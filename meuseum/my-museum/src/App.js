import React, { useRef } from "react";
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
      {createWall([0, 5, -5], [0, 0, 0], wallTextures.back)} {/* Back wall */}
      {createWall([0, 5, 5], [0, Math.PI, 0], wallTextures.front)} {/* Front wall */}
      {createWall([-5, 5, 0], [0, Math.PI / 2, 0], wallTextures.left)} {/* Left wall */}
      {createWall([5, 5, 0], [0, -Math.PI / 2, 0], wallTextures.right)} {/* Right wall */}
      {createWall([0, 10, 0], [-Math.PI / 2, 0, 0], wallTextures.ceiling)} {/* Ceiling */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial map={new THREE.TextureLoader().load(wallTextures.floor)} />
      </mesh>
    </group>
  );
}

export default function App() {
  const controlsRef = useRef();

  return (
    <>
      <Canvas
        style={{ height: "200vh", background: "black" }}
        camera={{ position: [0, 20, 15], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={5} />
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          maxPolarAngle={Math.PI / 2} // Prevent vertical rotation
          minPolarAngle={Math.PI / 2} // Prevent vertical rotation
        />

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

    </>
  );
}
