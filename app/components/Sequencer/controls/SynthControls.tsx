import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Synth, SynthOptions, ToneOscillatorType } from "tone";
import { RecursivePartial } from "tone/build/esm/core/util/Interface";

type Props = {
    synthSettings: RecursivePartial<SynthOptions>;
    setSynthSettings: Dispatch<SetStateAction<RecursivePartial<SynthOptions>>>;
};

const SynthControls = ({ synthSettings, setSynthSettings }: Props) => {
    const handleEnvelopeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSynthSettings((prev) => ({
            ...prev,
            envelope: {
                ...prev.envelope,
                [e.target.name]: parseFloat(e.target.value),
            },
        }));
    };

    const handleOscillatorChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setSynthSettings((prev) => ({
            ...prev,
            oscillator: {
                ...prev.oscillator,
                [e.target.name]: e.target.name === "type" ? e.target.value as ToneOscillatorType : parseInt(e.target.value),
            },
        }));
    };

    const handlePortementoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSynthSettings((prev) => ({
            ...prev,
            portamento: parseFloat(e.target.value),
        }));
    };
    
    return (
        <section id="synth-controls">
            <div id="envelope-controls">
                <label htmlFor="attack">Attack</label>
                <input
                    id="attack"
                    name="attack"
                    type="range"
                    min={0.01}
                    max={1}
                    step={0.01}
                    value={Number(synthSettings.envelope?.attack) || 0.01}
                    onChange={handleEnvelopeChange}
                />
                <label htmlFor="decay">Decay</label>
                <input
                    id="decay"
                    name="decay"
                    type="range"
                    min={0.01}
                    max={1}
                    step={0.01}
                    value={Number(synthSettings.envelope?.decay) || 0.01}
                    onChange={handleEnvelopeChange}
                />
                <label htmlFor="sustain">Sustain</label>
                <input
                    id="sustain"
                    name="sustain"
                    type="range"
                    min={0.01}
                    max={1}
                    step={0.01}
                    value={Number(synthSettings.envelope?.sustain) || 0.01}
                    onChange={handleEnvelopeChange}
                />
                <label htmlFor="release">Release</label>
                <input
                    id="release"
                    name="release"
                    type="range"
                    min={0.01}
                    max={1}
                    step={0.01}
                    value={Number(synthSettings.envelope?.release) || 0.01}
                    onChange={handleEnvelopeChange}
                />
            </div>
            <div id="oscillator-controls">
                <label htmlFor="type">Type</label>
                <select
                    id="type"
                    name="type"
                    value={synthSettings.oscillator?.type || "sine"}
                    onChange={handleOscillatorChange}
                >
                    <option value="sine">Sine</option>
                    <option value="square">Square</option>
                    <option value="sawtooth">Sawtooth</option>
                    <option value="triangle">Triangle</option>
                </select>
                <label htmlFor="phase">Phase</label>
                <input
                    id="phase"
                    name="phase"
                    type="range"
                    min={0}
                    max={360}
                    step={1}
                    value={synthSettings.oscillator?.phase || 0}
                    onChange={handleOscillatorChange}
                />
                <label htmlFor="portamento">Portamento</label>
                <input
                    id="portamento"
                    name="portamento"
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={synthSettings.portamento || 0}
                    onChange={handlePortementoChange}
                />
            </div>
        </section>
    );
};

export default SynthControls;
