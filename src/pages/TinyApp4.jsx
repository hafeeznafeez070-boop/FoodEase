import { text } from "@fortawesome/fontawesome-svg-core";
import React, { use, useState } from "react";

function TinyApp4() {
  const [todoVal, setTodoVal] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editVal, setEditVal] = useState("");

  const addFunction = () => {
    setList((prev) => [...prev, { text: todoVal, completed: false }]);
    setTodoVal("");
  };

  const deleteFunction = (index) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };
  const editStart = (item, index) => {
    setEditIndex(index);
    setEditVal(item.text);
  };
  const saveEdit = (index) => {
    setList((prev) =>
      prev.map((item, i) => (index === i ? { ...item, text: editVal } : item))
    );
    setEditIndex(null);
    setEditVal("");
  };
  const toggleCheckBox = (index) => {
    setList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div className="bg-amber-50 flex flex-col justify-center items-center w-full h-screen">
      <div>
        <input
          value={todoVal}
          onChange={(e) => setTodoVal(e.target.value)}
          placeholder="Enter a todo"
          className="border p-2 rounded-xl bg-gray-300 border-b-blue-600 text-md shadow "
        />
        <button
          onClick={addFunction}
          className="p-2 bg-blue-300 text-white rounded-xl m-3 text-md px-8"
        >
          Add
        </button>
      </div>
      <div className=" w-60/100 ">
        {list.map((item, i) => (
          <div className="flex w-full justify-between items-center" key={i}>
            <div className="w-2/3 p-2 px-5 flex border-b">
              {editIndex === i ? (
                <input
                  className="text-xl mx-2 border w-full p-2 rounded-2xl"
                  value={editVal}
                  onChange={(e) => setEditVal(e.target.value)}
                />
              ) : (
                <>
                  <input
                    className="mx-2 mt-1"
                    value={item.completed}
                    onChange={() => toggleCheckBox(i)}
                    type="checkbox"
                  />
                  <p
                    className={
                      item.completed
                        ? "line-through text-gray-500 text-xl mx-2"
                        : "text-black text-xl mx-2"
                    }
                  >
                    {" "}
                    {item.text}{" "}
                  </p>
                </>
              )}
            </div>
            <div className="flex m-2 w-1/3">
              <button
                onClick={() => deleteFunction(i)}
                className="bg-red-600 text-white p-2 rounded m-2"
              >
                Delete
              </button>
              {editIndex === i ? (
                <button
                  onClick={() => saveEdit(i)}
                  className="bg-green-600 text-white p-2 rounded m-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => editStart(item, i)}
                  className="bg-blue-600 text-white p-2 rounded m-2"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TinyApp4;
