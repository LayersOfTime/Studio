import React from "react";
import * as THREE from 'three'
import { CameraShake,OrbitControls, PerspectiveCamera} from "@react-three/drei";
import { Environment } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import hdri from "./static/potsdamer_platz_1k.hdr";




export default function App() {


  return (
    <>
      <Canvas
      shadows
        gl={{
          logarithmicDepthBuffer: true,
          antialias: true,
          stencil: false,
          depth: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}>
        {/* <Perf /> */}
        <color attach="background" args={['#151520']} />
        <fog attach="fog" args={['#151520', 0.1, 9]} />
        {/* <Sparkles
          size={1}
          scale={[4, 2, 4]}
          position-y={.1}
          speed={0.2}
          count={100}
          opacity={.1}
          color={[0.2, 0.2, 0.2]}
        /> */}
        <Environment files={hdri} />
        {/* <directionalLight
        position={[0,25,0]}
          intensity={10}
          castShadow
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
        /> */}
        {/* <Effects /> */}
        <CameraShake
          maxYaw={0.01}
          maxPitch={0.01}
          maxRoll={0.01}
          yawFrequency={0.25}
          pitchFrequency={0.24}
          rollFrequency={0.26}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 2]} />
        <OrbitControls
          makeDefault
          enablePan={false}
          maxDistance={4.5}
          minDistance={1.5}
          maxPolarAngle={Math.PI / 2} // highlight-line
          minPolarAngle={Math.PI / 3} // highlight-line
        />
        <Model />
      </Canvas>
    </>
  );
}


