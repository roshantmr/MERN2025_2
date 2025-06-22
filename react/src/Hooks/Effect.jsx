import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);
  setTimeout(()=>{
    setCount(count+1);
  },2000)
  useEffect(()=>{  5
    console.log("UseEffect Rendered")
  },[count])

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Effect;
