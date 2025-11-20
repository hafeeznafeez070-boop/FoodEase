import React, { useState } from "react";

function ToggleApp() {
  const [show, setShow] = useState(false);

  const showAndDissFunc = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="bg-amber-50 flex flex-col justify-center items-center h-screen">
      <h1>My Toggle App</h1>
      {show && <h3>Things to Appear and dissapear</h3>}
      <button
        className="bg-green-500 text-white p-3 rounded-xl"
        onClick={showAndDissFunc}
      >
        Show & Dissapear
      </button>
    </div>
  );
}

export default ToggleApp;
