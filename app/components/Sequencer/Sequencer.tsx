"use client"
import "./Sequencer.css"
import { useEffect, useState, useRef } from 'react';
import { SynthOptions, PolySynth, getDraw, Part } from 'tone';
import { RecursivePartial } from 'tone/build/esm/core/util/Interface';
import { notes } from '@/lib/functions/scale-data';
import TransportControls from './controls/TransportControls';
import DestinationControls from './controls/DestinationControls';
import SynthControls from './controls/SynthControls';
import { createSynths } from '@/lib/features/tone/createSynths';
import { updateActiveRow } from '@/lib/features/grid/gridSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';



const initSynthSettings: RecursivePartial<SynthOptions> = {
    volume: -50,
    detune: 0,
    portamento: 0,
    oscillator: {
        type: 'sine',
        phase: 0,
        partialCount: 0,
    },
    envelope: {
        attack: 0.05,
        decay: 0.3,
        sustain: 0.1,
        release: 0.1,
    },
};


const Sequencer = () => {
    const [loaded, setLoaded] = useState(false);
    const [synthSettings, setSynthSettings] = useState(initSynthSettings);
    const patternData = useAppSelector((state) => state.patterns.patternData);
    const dispatch = useAppDispatch();
    const synthsRef = useRef<{[key:string]: PolySynth}>({});
    const sequenceRef = useRef<any[] | null>(null);


    // Initialize synths only once
    useEffect(() => {
        if (!loaded) return;
        synthsRef.current = createSynths(notes, synthSettings);
    }, [loaded, synthSettings]);

    useEffect(() => {
        // Apply settings when synthSettings change
        Object.keys(synthsRef.current).forEach((synthKey) => {
            synthsRef.current[synthKey].set(synthSettings);
        });
    }, [synthSettings]);

    useEffect(() => {
   
        const sequencer:Part = new Part((time, value) => {
                patternData.forEach((row, i) => {
                    const triggerNote = row.note + row.octave;
                    dispatch(updateActiveRow(i));
                    row.timeDataArray.forEach((cell, j) => {
                        if (cell.active) {
                            synthsRef.current[row.note].triggerAttackRelease(row.note, "16n", time, cell.velocity);
                        }
                    } 
                )});
            },
            patternData.map((row) => row.timeDataArray));  
        sequencer.loop = true;
        sequencer.loopStart = 0;

        return () => {
            sequencer.dispose();
        };
    }, [patternData , dispatch]);

    return (
        <section id="sequencer">
            <TransportControls setLoaded={setLoaded} />
            <DestinationControls />
            <SynthControls synthSettings={synthSettings} setSynthSettings={setSynthSettings} />
        </section>
    );
};

export default Sequencer;
