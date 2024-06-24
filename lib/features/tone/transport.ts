import { getContext, loaded, start} from 'tone';


export const pauseTransport = () => {
    getContext().transport.pause();
}

export const startTransport = async () => {
    await start();
    await loaded();
    getContext().transport.start();
}

export const stopTransport = () => {
    getContext().transport.stop();
}

export const setTransportTempo = (tempo: number) => {
    getContext().transport.bpm.rampTo(tempo, 0.1);
}