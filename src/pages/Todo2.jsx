import React, { use, useState } from "react";

function Todo2() {
  const [todoValue, setTodoValue] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const addFunc = () => {
    console.log(todoValue);
    setTodoArr((prev) => [...prev, todoValue]);
    console.log(todoArr);
  };
  return (
    <div className="bg-amber-50 h-screen">
      <input
        placeholder="Enter a Todo"
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={addFunc}>Add</button>
      {todoArr && todoArr.map((todo, index) => <p key={index}>{todo}</p>)}
    </div>
  );
}

export default Todo2;
