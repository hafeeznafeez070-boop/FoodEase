import React, { use, useState } from "react";

function Todo2() {
  let [todoValue, setTodoValue] = useState("");
  let [todoArr, setTodoArr] = useState([]);

  const addFunc = () => {
    if (todoValue) {
      setTodoArr((prev) => [...prev, todoValue]);
      setTodoValue("");
    }
  };

  const removeFunc = (index) => {
    const filteredArr = todoArr.filter((v, i) => index !== i);
    setTodoArr(filteredArr);
  };

  const updateTodo = (index) => {
    let userInput = prompt(`Update The Todo:`, `${todoArr[index]}`);
    if (userInput) {
      let newArr = [...todoArr];
      newArr[index] = userInput;
      setTodoArr(newArr);
    }
  };

  return (
    <div className="bg-amber-50 h-screen flex flex-col  justify-center items-center">
      <div>
        <input
          value={todoValue}
          className="bg-gray-600 text-white p-2 px-4 rounded-xl"
          placeholder="Enter a Todo"
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button
          className="m-5 p-2 px-4 bg-blue-600 text-white rounded-xl"
          onClick={addFunc}
        >
          Add
        </button>
      </div>

      {todoArr &&
        todoArr.map((todo, index) => (
          <div className="flex justify-around w-70/100 h-20 p-5">
            <div className="w-2/3 border-b">
              <h3
                className="text-black text-xl "
                // onChange={(e) => setUpdateTodo(e.target.value)}
                key={index}
                value={todo}
              >
                {todo}
              </h3>
            </div>

            <div className="w-1/3">
              <button
                onClick={() => removeFunc(index)}
                className="bg-red-500 text-white rounded p-2 m-2"
              >
                Remove
              </button>
              <button
                onClick={() => updateTodo(index)}
                className="bg-green-500 text-white rounded p-2"
              >
                Update
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Todo2;
