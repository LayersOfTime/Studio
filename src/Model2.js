import React from "react";
import { useGLTF } from "@react-three/drei";
import model from './static/inquisitive.glb';

export default function Model(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface2.geometry}
        material={materials.podium}
        position={[0, 0.009, -0.009]}
        rotation={[Math.PI / 2, 0, 0.6]}
        scale={0.01}
      />
      <group
        position={[0, 0.491, -0.025]}
        rotation={[Math.PI / 2, 0, Math.PI / 812]}
        scale={3.274}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve.geometry}
          material={materials["Material.001"]}
          position={[-0.211, 0.001, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={materials["Material.003"]}
          position={[-0.211, 0.001, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(model);