import { useEffect, useState } from "react";
import { setAttack, setKnee, setRatio, setRelease, setThreshold, setVolume } from "@/lib/features/tone/destination";

type Props = {
}

const DestinationControls = ({ }:Props) => {
    const [currentVolume, setCurrentVolume] = useState<number>(-6);
    const [currentThreshold, setCurrentThreshold] = useState<number>(-30);
    const [currentRatio, setCurrentRatio] = useState<number>(12);
    const [currentAttack, setCurrentAttack] = useState<number>(0.003);
    const [currentRelease, setCurrentRelease] = useState<number>(0.25);
    const [currentKnee, setCurrentKnee] = useState<number>(30);
    

    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentVolume(parseInt(e.target.value));
        setVolume(parseInt(e.target.value))
    };

    const handleThreshold = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setCurrentThreshold(parseInt(e.target.value));
    
    };

    const handleRatio = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setCurrentRatio(parseInt(e.target.value));
    };

    const handleAttack = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setCurrentAttack(parseInt(e.target.value));
    };

    const handleRelease = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setCurrentRelease(parseInt(e.target.value));
    };

    const handleKnee = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setCurrentKnee(parseInt(e.target.value));
    };

    useEffect(() => {
        setVolume(currentVolume)
    }, [currentVolume]);

    useEffect(() => {
            setThreshold(currentThreshold)
    }, [currentThreshold]);

    useEffect(() => {
        setRatio(currentRatio)
    }, [currentRatio]);

    useEffect(() => {
        setAttack(currentAttack)
    }, [currentAttack]);

    useEffect(() => {
        setRelease(currentRelease)
    }, [currentRelease]);

    useEffect(() => {
        setKnee(currentKnee)
    }, [currentKnee]);



    return (
        <section id="destination-controls">
            <label htmlFor="volume-slider" >Volume</label>
            <input id="volume-slider" type="range" min={-40} max={0} value={currentVolume} onChange={handleVolume} />
            <label htmlFor="compressor-threshold" >Threshold</label>
            <input id="compressor-threshold" type="range" min={-99} max={0} value={currentThreshold} onChange={handleThreshold} />
            <label htmlFor="compressor-ratio" >Ratio</label>
            <input id="compressor-ratio" type="range" min={1} max={20} value={currentRatio} onChange={handleRatio} />
            <label htmlFor="compressor-attack" >Attack</label>
            <input id="compressor-attack" type="range" min={0.001} max={1} value={currentAttack} onChange={handleAttack} />
            <label htmlFor="compressor-release" >Release</label>
            <input id="compressor-release" type="range" min={0.01} max={1} value={currentRelease} onChange={handleRelease} />
            <input id="compressor-knee" type="range" min={0} max={40} value={currentKnee} onChange={handleKnee} />
        </section>
    );
};

export default DestinationControls;