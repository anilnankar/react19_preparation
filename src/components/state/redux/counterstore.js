import {configureStore, createSlice} from '@reduxjs/toolkit';
// Create state + reducers
const counterStore = createSlice({
    // Name of store
    "name": "counter",

    // Initial State
    "initialState": { count:0 },

    // Setup Reducers
    "reducers": {
        "increment":(state) => {
            state.count += 1;
        },
        "decrement": (state) => {
            state.count -= 1;
        },
        "reset": (state) => {
            state.count = 0;
        }
    }
});

// Extract actions from store
export const { increment, decrement, reset } = counterStore.actions;

// Setup store
const store = configureStore({
    reducer: counterStore.reducer
})

export default store;
