import * as Tone from 'tone';

import { updateToneLoaded } from '../toneSlice';
import { createSynths } from '../createSynths';
import { notes } from '@/lib/functions/scale-data';



export const startTone = async (start:boolean) => {
  await Tone.start();
  updateToneLoaded(true)
  console.log('audio ready');
};


export const startPart = async (part: Tone.Part) => {
  part.loop = true;
  part.start(0);
}

