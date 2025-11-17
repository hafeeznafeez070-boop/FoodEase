import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

function TodoInputs({ todoVal, todos }) {
  const [showButtons, setShowButtons] = useState(false);
  const [btnShow, setBtnShow] = useState("hidden"); // hidden
  const [updatedTodo, setUpdatedTodo] = useState(todoVal); // hidden

  const visibilityFunc = () => {
    if (showButtons) {
      setBtnShow("");
    } else {
      setBtnShow("hidden");
    }
  };

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: updatedTodo,
        }),
      });

      if (res.ok) {
        toast.success("todos is updated");
      }
    } catch (error) {
      toast.error("todos update is failed");
    }
  };

  const removeFunction = (id) => {
    // const itemToDelete = await fetch(`https://dummyjson.com/todos/${id}`, {
    //   method: "DELETE",
    // }).then((res) => res.json());
    // [item, setItem] = useState(itemToDelete);

    // setItem = "";
    // oneItemDeleted = updatedTodo.filter((todo) => todo.id !== id);
    // setUpdatedTodo(oneItemDeleted);
    console.log(updatedTodo);
  };
  // console.log(todoVal);
  useEffect(visibilityFunc, [showButtons]);
  return (
    <div className="w-80/100  flex items-center justify-between m-1 p-2 border-b pl-10">
      <div className="mt-5 flex justify-center items-center">
        <input
          onChange={(e) => setShowButtons((prev) => !prev)}
          className="mr-3 w-10 h-5 "
          type="checkbox"
        />
        <input
          className="font-semibold"
          value={updatedTodo.todo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => handleUpdate(todoVal.id)}
          type="button"
          className="w-25 mt-2 focus:outline-none  text-white bg-green-700 hover:bg-green-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-3 ml-2 mb-2 cursor-pointer "
        >
          Update
        </button>
        <button
          type="button"
          onClick={() => removeFunction(todoVal.id)}
          className="w-25 mt-2 focus:outline-none  text-white bg-red-700 hover:bg-red-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-3 ml-2 mb-2 cursor-pointer "
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoInputs;
