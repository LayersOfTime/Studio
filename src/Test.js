import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"


export default function Test() {


    return (
        <>
            <Canvas shadows>
            <OrbitControls />
                <directionalLight castShadow position={[0,10,20]} intensity={1}/>
                <mesh receiveShadow scale={2} rotation={[-Math.PI / 2 , 0 ,0]}>
                    <planeGeometry />
                    <meshStandardMaterial />
                </mesh>
                <mesh castShadow scale={1}>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </>
    )
}