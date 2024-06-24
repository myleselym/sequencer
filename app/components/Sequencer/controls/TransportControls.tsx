import { pauseTransport, setTransportTempo, startTransport, stopTransport } from "@/lib/features/tone/transport";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


type Props = {
    setLoaded: Dispatch<SetStateAction<boolean>>;
};

const TransportControls = ({setLoaded}:Props) => {
    const [playPause, setPlayPause] = useState(false);
    const [tempo, setTempo] = useState<number>(120);

    const handleTempo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempo(parseInt(e.target.value));
        setTransportTempo(parseInt(e.target.value));
    };

    const handlePlayPause = async () => {
        if (playPause) {
            pauseTransport();
        } else {
            startTransport();
            setLoaded(true);
        }
        setPlayPause(!playPause);
    };

    const handleStop = () => {
        setPlayPause(false);
        stopTransport()
        setLoaded(false);
    };

    

    return (
        // JSX code for your component goes here
        <section id="transport-controls">
            <button onClick={handlePlayPause}>{playPause ? "Pause" : "Play"}</button>
            <button onClick={handleStop}>Stop</button>
            <label htmlFor="tempo-slider" >Tempo</label>
            <input id="tempo-slider" type="range" min={20} max={500} value={tempo} onChange={handleTempo} />
        </section>
    );
};

export default TransportControls;