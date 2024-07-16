const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment'){
        return {
            counter: state?.counter + 1,         // state.counter is the value the prev counter, counter is new or updated counter value.
        }
    }

    if (action.type === 'decrement'){
        return {
            counter: state?.counter - 1,
        }
    }

    return state;

}
const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {                   
    const latestState = store.getState();               // getState() will return the latest state object, this fun is given by redux.
    console.log(latestState);
}

store.subscribe(counterSubscriber);         // subscribe to the store using subscription function, so that whenever the state changes, it will be notified to subscription funciton and will be executed in this case counterSubscriber() fun.

store.dispatch({type: 'increment'});        
store.dispatch({type: 'decrement'});

