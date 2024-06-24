import { createSlice } from '@reduxjs/toolkit';
import * as Tone from 'tone';
import * as toneThunks from './thunks/toneThunks';


const INITIAL_STATE = {
  transportState: Tone.getTransport().state,
  toneLoaded: false,
};

export const toneSlice = createSlice({
  name: 'tone',
  initialState: INITIAL_STATE,
  reducers: {
    updateToneLoaded: (state, action) => {
        state.toneLoaded = action.payload;
    },
  },
});

export const { updateToneLoaded } = toneSlice.actions;

export const { startTone } = toneThunks;

export default toneSlice.reducer;
