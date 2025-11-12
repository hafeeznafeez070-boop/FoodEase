import { useState } from "react";
import TodoInputs from "../component/TodoInputs";

export default function Todo() {
  const [val, setVal] = useState("");
  const [todoVal, setTodoVal] = useState("");

  const [myTodos, setMyTodos] = useState([]);

  const todoFunc = () => {
    if (val) {
      setTodoVal(myTodos.push(val));
      setVal("");
    }
  };

  return (
    <div className="w-full h-screen bg-amber-50 overflow-hidden flex items-center flex-col">
      <h1 className="text-4xl m-4">Todo List</h1>
      <div className="w-80/100  flex justify-center items-center">
        <input
          className="pl-5 p-2 w-2/3 outline-none border shadow-lg rounded-lg"
          placeholder="Enter Your Todo"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          onClick={todoFunc}
          type="button"
          className="w-25 mt-2 focus:outline-none  text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-3 ml-2 mb-2 cursor-pointer "
        >
          Add
        </button>
      </div>
      {myTodos.map((todo, index) => (
        <TodoInputs key={index} todoVal={todo} />
      ))}
    </div>
  );
}
