// import { createStore } from "redux";

import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter : 0, showCounter: true
};

// ----------------------------------------------Redux ToolKit----------------------------------------------
// Here we will create a slice of our global state.
const counterSlice = createSlice({
    name: 'counter',        // Every Slice require a name as a identifier.
    initialState,           // Modern JS Syntax to ommit key-val pair in case both have same name.     
    reducers: {             // This includes all the reducer funtion that this slides needs.
        // These methods will be called by react and Every method will receive the current sate and action by default. Here we no need a if statement to check for the dispatch this will be take care by redux toolkit.
        increment(state) {
            state.counter++;            // This is not allowed in redux but possible in redux toolkit because of Immer. Which will ditext code like this and it will automatically clne the existing state and creates the new state object and keeps all state which are not editing and override the state which we are editing in a immutable way. So we no need to create a copy of existing state manually using ... as we do in redux.  
        },     
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;   // This will get the access to all the reducer methods we defined.

// const store = createStore(counterSlice.reducer);   // By doing this we will get access all our reducers function inside counterSlice
// But the problem with createStore is that we can pass only one reducer can be passed. TO avoid this we ca use configureStore as below

// By using configureStore we can have multiple reducers into one, from diff slices.
const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;

// ----------------------------------------------Redux ToolKit END----------------------------------------------


// ----------------------------------------------Redux----------------------------------------------
// const counterReducer = (state= initialState , action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }


//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);
// export default store;
// ----------------------------------------------Redux END----------------------------------------------





