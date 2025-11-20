import React, { useState } from "react";

function ControlledInput() {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="bg-amber-50 flex flex-col justify-center items-center h-screen">
      <h1>Controlled Input</h1>
      <input
        placeholder="Input Here"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
      />
      <h3>{inputVal}</h3>
    </div>
  );
}

export default ControlledInput;
