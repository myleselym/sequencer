import { PolySynth, Synth, SynthOptions } from "tone";
import { RecursivePartial } from "tone/build/esm/core/util/Interface";

export const createSynths = (scale: string[], synthSettings:RecursivePartial<SynthOptions>) => {
        const synths: {[key: string]: PolySynth} = {};
        scale.forEach((note) => {
            synths[note] = new PolySynth(Synth).toDestination();
        });
        // Apply initial settings to all synths
        Object.keys(synths).forEach((synthKey: string) => {
            synths[synthKey].set(synthSettings);
        });
        console.log(synths)
        return synths;
    }