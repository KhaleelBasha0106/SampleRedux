import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions/Actions";
const MyComponent = () => {
  const value = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>

        <h1>COUNTER APP</h1>
        <h1>{value}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>&nbsp;&nbsp;
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
};

export default MyComponent;
