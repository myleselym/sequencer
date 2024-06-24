import { createSlice } from "@reduxjs/toolkit";

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        activeRow: null,
        focusedRow: null,
        hoverRowCol: [null, null],
    },
    reducers: {
        updateActiveRow: (state, action) => {
            state.activeRow = action.payload;
        },
        updateFocusedRow: (state, action) => {
            state.focusedRow = action.payload;
        },

        updateHoverRowCol: (state, action) => {
            state.hoverRowCol = action.payload;
        },
     
    }
});

export const { updateActiveRow, updateFocusedRow, updateHoverRowCol } = gridSlice.actions;

export default gridSlice.reducer;