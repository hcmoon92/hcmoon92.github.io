import React from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";

function MuseumRoom({ position, label, color, textures, onDoorClick }) {
  const wallMaterial = (imageUrl) =>
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(imageUrl),
      side: THREE.DoubleSide,
    });

  return (
    <group position={position}>
      {/* Walls */}
      <mesh position={[0, 2, -2]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[4, 4]} />
        <primitive attach="material" object={wallMaterial(textures.back)} />
      </mesh>
      <mesh position={[0, 2, 2]}>
        <planeGeometry args={[4, 4]} />
        <primitive attach="material" object={wallMaterial(textures.front)} />
      </mesh>
      <mesh position={[2, 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[4, 4]} />
        <primitive attach="material" object={wallMaterial(textures.right)} />
      </mesh>
      <mesh position={[-2, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[4, 4]} />
        <primitive attach="material" object={wallMaterial(textures.left)} />
      </mesh>

      {/* Floor */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Door */}
      <mesh position={[0, 1, 2.01]} onClick={onDoorClick}>
        <planeGeometry args={[1, 2]} />
        <meshStandardMaterial color="brown" />
      </mesh>

      {/* Label */}
      <Html position={[0, 4.5, 0]}>
        <div style={{ color: "white", textAlign: "center" }}>{label}</div>
      </Html>
    </group>
  );
}

export default MuseumRoom;