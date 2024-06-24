import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createPatternData } from "@/lib/functions/grid-data";
import { createChromaticScale } from "@/lib/functions/scale-data";

const initialChromaticScale = createChromaticScale(4);
const initialPatternData = createPatternData(0, initialChromaticScale.scale);
const initialPatternName = "Pattern-1";


// Define the initial state
const initialState = {
    // Set your initial state values here
    patternName: initialPatternName,
    patternData: initialPatternData,
    userPatterns: {[initialPatternName as string]: initialPatternData },
    chromaticScaleData: initialChromaticScale,
};

// Create the slice
const patternsSlice = createSlice({
    name: 'part',
    initialState,
    reducers: {
        // Define your actions and their corresponding reducers here
        updatePatternName: (state, action: PayloadAction<string>) => {
            state.patternName = action.payload;
        },
        updatePatternData: (state, action: PayloadAction<any>) => {
            state.patternData = action.payload;
        },
        updateUserPatterns: (state, action: PayloadAction<any>) => {
            state.userPatterns = action.payload;
        },
        updateChromaticScaleData: (state, action: PayloadAction<any>) => {
            state.chromaticScaleData = action.payload;
        },
    },
});

export const { updatePatternName, updatePatternData, updateUserPatterns, updateChromaticScaleData  } = patternsSlice.actions;

export default patternsSlice.reducer;