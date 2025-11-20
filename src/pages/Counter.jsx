import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const addFunc = () => {
    setCount((prev) => prev + 1);
  };

  const subtractFunc = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="bg-amber-50 flex flex-col justify-center items-center h-screen">
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <button onClick={addFunc} className="bg-red-400 p-2">
        Add
      </button>
      <button onClick={subtractFunc} className="bg-green-400 p-2">
        Remove
      </button>
    </div>
  );
}

export default Counter;
