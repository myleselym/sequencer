// const initOctaves = 4;
// const initRootNote = "C"
// const initScaleType = "Ionian"

import { createChromaticScale, createScale } from '@/lib/functions/scale-data';
import { createSlice } from '@reduxjs/toolkit';
const initRootNote = "C";
const initFocusedNote = "";
const initScaleType = "Ionian";
const initOctaves = 4;
const initScale = createScale(initRootNote, initScaleType);
const initChromaticScale = createChromaticScale(initOctaves);

export const scalesSlice = createSlice({
    name: 'scales',
    initialState: {
        rootNote: initRootNote,
        focusedNote: initFocusedNote,
        scaleType: initScaleType,
        octaves: initOctaves,
        scale: initScale,
        chromaticScale: initChromaticScale,
    },
    reducers: {
        updateRootNote: (state, action) => {
            state.rootNote = action.payload;
        },
        updateFocusedNote: (state, action) => {
            state.focusedNote = action.payload;
        },
        updateScaleType: (state, action) => {
            state.scaleType = action.payload;
        },
        updateOctaves: (state, action) => {
            state.octaves = action.payload;
        },
        updateScale: (state, action) => {
            state.scale = createScale(action.payload.rootNote, action.payload.scaleType);
        },
        updateChromaticScale: (state, action) => {
            state.chromaticScale = createChromaticScale(action.payload);
        },
    }    
});

export const { updateRootNote, updateFocusedNote, updateScaleType, updateOctaves, updateScale, updateChromaticScale } = scalesSlice.actions;

export default scalesSlice.reducer;