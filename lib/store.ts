import { configureStore } from '@reduxjs/toolkit'
import gridReducer from './features/grid/gridSlice'
import patternsReducer from './features/patterns/patternsSlice'
import scalesReducer from './features/scales/scalesSlice'
import toneReducer from './features/tone/toneSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        grid: gridReducer,
        patterns: patternsReducer,
        scales: scalesReducer,
        tone: toneReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']