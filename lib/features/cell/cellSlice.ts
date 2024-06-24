import {createSlice, configureStore} from '@reduxjs/toolkit';

const cellSlice = createSlice({
    name: 'cell',
    initialState: {
        isActive: false,
        note: "",
        octave: 0,
        velocity: 60
    },
    reducers: {
        toggleActive: (state) => {
            state.isActive = !state.isActive;
        },
        setNote: (state, action) => {
            state.note = action.payload;
        },
        setOctave: (state, action) => {
            state.octave = action.payload;
        },
        setVelocity: (state, action) => {
            state.velocity = action.payload;
        }
    },
    });

    export const {toggleActive, setNote, setOctave, setVelocity} = cellSlice.actions;
