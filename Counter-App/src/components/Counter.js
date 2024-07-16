import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  // To access each state from the store (a group or collections of state) then we have to create var for each one.
  const counter = useSelector((store) => store?.counter.counterVal); // To get the state of the store at any pont in time. Here the first counter is identifier for the counter slice as we have 2 slice in our store and the 2nd counter is for the state value.
  const show = useSelector((store) => store?.counter.showCounter); // To get the state of the store at any pont in time.

  const dispatch = useDispatch(); // This will return a dispatch function, which we can use inside our code, to trigger the reducer function inside the Redux store.

  // ----------------------------------------------Redux ToolKit----------------------------------------------
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementByNumber = () => {
    dispatch(counterActions.increase(10));    // Here redux toolkit will automatically creates {type: SOME_UNIQUE_IDENTIFIER, payload: 10} 
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  // ----------------------------------------------Redux ToolKit END----------------------------------------------
 
  // ----------------------------------------------Redux----------------------------------------------
  // const toggleCounterHandler = () => {
  //     dispatch({type:'toggle'})
  // };

  // const incrementHandler = () =>{
  //   dispatch({type: 'increment'})
  // }

  // const incrementByNumber = () =>{
  //   dispatch({type: 'increase', amount:5})
  // }

  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement'})
  // }
  // ----------------------------------------------Redux END----------------------------------------------

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div style={{ margin: "1rem" }}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByNumber}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
