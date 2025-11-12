import React, { useCallback, useEffect, useState } from "react";

function TodoInputs({ todoVal }) {
  const [showButtons, setShowButtons] = useState(false);
  const [btnShow, setBtnShow] = useState("hidden"); // hidden

  const visibilityFunc = () => {
    if (showButtons) {
      setBtnShow("");
    } else {
      setBtnShow("hidden");
    }
  };

  useEffect(visibilityFunc, [showButtons]);
  return (
    <div className="w-80/100  flex items-center justify-between m-1 p-2 border-b pl-10">
      <div className="mt-5 flex justify-center items-center">
        <input
          onChange={(e) => setShowButtons((prev) => !prev)}
          className="mr-3 w-10 h-5 "
          type="checkbox"
        />
        <label className="font-semibold">{todoVal}</label>
      </div>
      <div className={btnShow}>
        <button
          type="button"
          className="w-25 mt-2 focus:outline-none  text-white bg-green-700 hover:bg-green-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-3 ml-2 mb-2 cursor-pointer "
        >
          Update
        </button>
        <button
          type="button"
          className="w-25 mt-2 focus:outline-none  text-white bg-red-700 hover:bg-red-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-3 ml-2 mb-2 cursor-pointer "
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoInputs;
