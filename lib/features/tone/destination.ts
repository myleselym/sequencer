import { getContext, Compressor, Volume } from "tone";

export interface CompressorSettings {
    attack: number;
    knee: number;
    ratio: number;
    release: number;
    threshold: number;
}

const volumeNode = new Volume(-10).toDestination();
const compressor = new Compressor(-30, 10).set({ attack: 0.003, release: 0.25, knee: 30, ratio: 12 }).toDestination();

export const setContext = (compressorSettings:CompressorSettings) => {
    compressor.set(compressorSettings);
    getContext().destination.chain(volumeNode, compressor);

}

export const setVolume = (volume: number) => {
    volumeNode.volume.rampTo(volume, 0.1)
}

export const setThreshold = (threshold: number) => {
    compressor.threshold.rampTo(threshold, 0.1)
}

export const setRatio = (ratio: number) => {
    compressor.ratio.rampTo(ratio, 0.1)
}

export const setAttack = (attack: number) => {
    compressor.attack.rampTo(attack, 0.1)
}

export const setRelease = (release: number) => {
    compressor.release.rampTo(release, 0.1)
}

export const setKnee = (knee: number) => {
    compressor.knee.rampTo(knee, 0.1)
}
