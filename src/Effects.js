import { Bloom, ChromaticAberration, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction, KernelSize } from 'postprocessing'


export function Effects() {

    return (
        <EffectComposer>
            {/* <DepthOfField
                focusDistance={0.1} // where to focus
                focalLength={0.15} // focal length
                bokehScale={2} // bokeh size
            /> */}
            <Bloom
                intensity={1.0} // The bloom intensity.
                blurPass={undefined} // A blur pass.
                width={Resizer.AUTO_SIZE} // render width
                height={Resizer.AUTO_SIZE} // render height
                kernelSize={KernelSize.LARGE} // blur kernel size
                luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
                luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
            />
            <Noise
                opacity={0.05}
            />
            <ChromaticAberration
                blendFunction={BlendFunction.NORMAL} // blend mode
                offset={[0.0004, 0.0004]} // color offset
            />
            <Vignette
                offset={0.5} // vignette offset
                darkness={0.5} // vignette darkness
                eskil={false} // Eskil's vignette technique
                blendFunction={BlendFunction.NORMAL} // blend mode
            />
            {/* <ToneMapping
                blendFunction={BlendFunction.NORMAL} // blend mode
                adaptive={true} // toggle adaptive luminance map usage
                resolution={1024} // texture resolution of the luminance map
                middleGrey={0.6} // middle grey factor
                maxLuminance={16.0} // maximum luminance
                averageLuminance={1.0} // average luminance
                adaptationRate={1.0} // luminance adaptation rate
            /> */}
        </EffectComposer>
    )
}