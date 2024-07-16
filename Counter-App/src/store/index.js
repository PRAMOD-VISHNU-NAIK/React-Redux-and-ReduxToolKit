// import { createStore } from "redux";

import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialCounterState = {
    counterVal : 0, showCounter: true
};

// ----------------------------------------------Redux ToolKit----------------------------------------------
// Here we will create a slice of our global state.
const counterSlice = createSlice({
    name: 'counter',        // Every Slice require a name as a identifier.
    initialState: initialCounterState,           // Modern JS Syntax to ommit key-val pair in case both have same name.     
    reducers: {             // This includes all the reducer funtion that this slides needs.
        // These methods will be called by react and Every method will receive the current sate and action by default. Here we no need a if statement to check for the dispatch this will be take care by redux toolkit.
        increment(state) {
            state.counterVal++;            // This is not allowed in redux but possible in redux toolkit because of Immer. Which will ditext code like this and it will automatically clne the existing state and creates the new state object and keeps all state which are not editing and override the state which we are editing in a immutable way. So we no need to create a copy of existing state manually using ... as we do in redux.  
        },     
        decrement(state) {
            state.counterVal--;
        },
        increase(state, action) {
            state.counterVal = state.counterVal + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {isAuthenticated: false}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },

        logout(state){
            state.isAuthenticated = false;
        }
    }
})

export const counterActions = counterSlice.actions;   // This will get the access to all the reducer methods or actions we defined.
export const authActions = authSlice.actions;

// const store = createStore(counterSlice.reducer);   // By doing this we will get access all our reducers function inside counterSlice
// But the problem with createStore is that we can pass only one reducer can be passed. TO avoid this we ca use configureStore as below

// By using configureStore we can have multiple reducers into one, from diff slices.
// make sure that we have only one redux store irrespective of any number of slices.
const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}       // These individual reducers will then automatically merged together into one main reducer which is exposed to this store.
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





