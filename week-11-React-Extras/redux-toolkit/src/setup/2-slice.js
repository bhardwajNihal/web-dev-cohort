import { createSlice } from "@reduxjs/toolkit";

// A slice is a way to organize a specific part of the state and the logic to handle it.
// It combines the state, actions, and reducer for one feature or "slice" of your app.

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },                     // Initial state: Defines the starting state.
    reducers : {                                    // Reducers: Functions that specify how the state changes in response to actions.
        increment : (state) => {state.value +=1},   // Actions: Named functions used to trigger state updates.
        decrement : (state) => {state.value -=1},
    }
})


export const { increment, decrement } = counterSlice.actions;       //exporting actions 
export default counterSlice.reducer                             // default exporting reducer separatelu