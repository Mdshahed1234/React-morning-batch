import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);
//   var [counterOne, setCounterOne] = useState();
  return (
    <div>
      <h1>This is Counter </h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter((counter = 0))}>reset</button>
      <button onClick={() => setCounter((counter -1))}>decrement</button>
    </div>
  );
};

export default Counter;
