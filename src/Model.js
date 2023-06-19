import React from "react";
import * as THREE from 'three'
import { MeshReflectorMaterial, useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import model from './static/layersoftime-web_v4.gltf';
import video from './static/final2.mp4';
import normal from './static/bottom_n.jpg';


function VideoMaterial({ url }) {
    const texture = useVideoTexture(url)
    texture.flipY = false;
    return <meshStandardMaterial needsUpdate={false} map={texture} toneMapped={true} emissiveMap={texture} emissive={'white'} emissiveIntensity={1} />
}

export default function Model(props) {
    const { nodes, materials } = useGLTF(model);
    const nTexture = useTexture(normal, (nTexture) => {
        nTexture.wrapS = nTexture.wrapT = THREE.RepeatWrapping;
    })
    nTexture.repeat.set(4, 4);
    const vTex = video

    return (
        <group {...props} dispose={null} scale={0.0025} position={[0, -0.5, 0]} rotation={[0, 11, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["speaker-black"].geometry}
                material={materials.black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["speaker-darkGrey"].geometry}
                material={materials.darkGrey}
            />
            <group position={[0, 74.96, 434.43]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["sub-black"].geometry}
                    material={materials.black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["sub-darkGrey"].geometry}
                    material={materials.darkGrey}
                />
            </group>
            <group position={[-256.4, 362.87, 170.93]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["IAV-red"].geometry}
                    material={materials.red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["IAV-black"].geometry}
                    material={materials.black}
                />
            </group>
            <group position={[-250, 357.97, 1.24]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pins.geometry}
                    material={materials.black}
                    position={[264.28, -354.4, -123.19]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sweep.geometry}
                    material={materials.purpleGlow}
                    position={[264.28, -354.4, -123.19]}
                />
            </group>
            <group position={[0, 4.08, 801.21]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["cableTray-black"].geometry}
                    material={materials.black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["cableTray-yellow"].geometry}
                    material={materials.yellow}
                />
            </group>
            <group position={[0, 0, 1258.02]}>
                <group position={[0, 33.03, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["platform-black_1"].geometry}
                        material={materials.black}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["platform-grey_1"].geometry}
                        material={materials.grey}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.legs_1.geometry}
                    material={materials.grey}
                    position={[0, 19.73, 0]}
                />
            </group>
            <group position={[-48.81, 144.08, 1236.65]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["f11-pinkGlow"].geometry}
                    material={materials.pinkGlow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["f11-purpleGlow"].geometry}
                    material={materials.purpleGlow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["f11-black"].geometry}
                    material={materials.black}
                />
            </group>
            <group position={[-69.52, 144.08, 1236.65]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["f11-pinkGlow_1"].geometry}
                    material={materials.pinkGlow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["f11-purpleGlow_1"].geometry}
                    material={materials.purpleGlow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["f11-black_1"].geometry}
                    material={materials.black}
                />
            </group>
            <group position={[0, 161.87, 1172.09]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["monitor-black"].geometry}
                    material={materials.black}
                />
            </group>
            <group position={[-81.11, 80.52, 1220.6]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["server-black"].geometry}
                    material={materials.black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["server-darkGrey"].geometry}
                    material={materials.darkGrey}
                />
            </group>
            <group position={[0, 40.53, 1221.22]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tableLegs_1.geometry}
                    material={materials.grey}
                    position={[0, 50.2, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table_1.geometry}
                    material={materials.black}
                    position={[0, 99.51, 0]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboardGroup.geometry}
                material={materials.black}
                position={[15.62, 145.24, 1237.97]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.monitorStand.geometry}
                material={materials.black}
                position={[0, 164.01, 1169.65]}
            />
            <group position={[0, 40.53, 397.52]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.tableLegs.geometry}
                    material={materials.grey}
                    position={[0, 50.2, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.table.geometry}
                    material={materials.black}
                    position={[0, 99.51, 0]}
                />
            </group>
            <group position={[0, 0, 358.02]}>
                <group position={[0, 33.03, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["platform-grey"].geometry}
                        material={materials.grey}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["platform-black"].geometry}
                        material={materials.black}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.legs.geometry}
                    material={materials.grey}
                    position={[0, 19.73, 0]}
                />
            </group>
            <group position={[-13.88, 28.3, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["frames-darkGrey"].geometry}
                    material={materials.darkGrey}
                />
            </group>
            <group position={[0, 0, -785.63]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["ledTubes-black"].geometry}
                    material={materials.black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["ledTubes-black_1"].geometry}
                    material={materials.black}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.People.geometry}
                material={materials.black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SMODE.geometry}
                material={materials.white}
                position={[0.17, 0.48, -274.96]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cdj.geometry}
                material={materials.black}
                position={[0, 143.52, 380.99]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BLACKOUT.geometry}
                material={materials.black}
                position={[-250, 252.65, -178.34]}
                rotation={[0, -1.57, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.IKIai.geometry}
                material={materials.white}
                position={[-250, 368.34, -174.79]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TD.geometry}
                material={materials.black}
                position={[-136.68, 65.24, -312.76]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Notch.geometry}
                material={materials.darOrange}
                position={[262.73, 47.5, -361.65]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.screens.geometry}
                position={[-6.94, 76.65, 96.61]}
            >
                <VideoMaterial url={vTex} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.text.geometry}
                material={materials.black}
                position={[0, 19.06, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.LOT.geometry}
                material={materials.black}
                position={[-250, 453.16, 0.47]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.stage.geometry}
                material={materials.darkGrey}
                position={[0, 250, 0]}
            />
            <mesh
                receiveShadow={true}
                // geometry={nodes.floor.geometry}
                scale={2000}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -.5, 0]}
            >
                <circleGeometry />
                <MeshReflectorMaterial
                    resolution={2048}
                    mirror={1}
                    mixBlur={1}
                    mixStrength={1}
                    // blur={blur || [0, 0]}
                    minDepthThreshold={0.8}
                    maxDepthThreshold={1.2}
                    // depthScale={depthScale || 0}
                    depthToBlurRatioBias={0.2}
                    debug={0}
                    // distortion={distortion || 0}
                    // distortionMap={distortionMap}
                    color="#333333"
                    metalness={0.5}
                    // roughnessMap={roughness}
                    roughness={1}
                    normalMap={nTexture}
                // normalScale={_normalScale}
                // reflectorOffset={reflectorOffset}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SW_MF.geometry}
                material={materials.black}
                position={[-257.98, 259.04, 74.55]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.intothedeepai.geometry}
                material={materials.black}
                position={[-256.93, 183.31, -156.04]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.bassisai.geometry}
                material={materials.black}
                position={[-253.57, 137.12, -46.36]}
                rotation={[0, -1.57, 0]}
            />
        </group>

    );
}

useGLTF.preload(model);