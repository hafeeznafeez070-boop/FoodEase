import { useEffect, useState } from "react";

export default function () {
  const [todoVal, setTodoVal] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addFunction = () => {
    //Load Saved Todos on first Render:

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem("todo-react"));
      if (saved) {
        setTodoList(saved);
      }
    }, []);

    // Save todos whenever list changes
    useEffect(() => {
      localStorage.setItem("todos-react", JSON.stringify(todoList));
    }, [todoList]);

    if (!todoVal.trim()) return;
    setTodoList((prev) => [...prev, { text: todoVal, completed: false }]);
    setTodoVal("");
  };

  const toggleFunction = (i) => {
    setTodoList((prev) =>
      prev.map((item, index) =>
        index === i ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteFunction = (index) => {
    setTodoList((prev) => prev.filter((_, i) => index !== i));
  };

  const editStart = (v, i) => {
    setEditIndex(i);
    setEditValue(v.text);
  };

  const saveEdit = (index) => {
    if (!editValue.trim()) return;
    setTodoList((prev) =>
      prev.map((item, i) => (i === index ? { ...item, text: editValue } : item))
    );
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="bg-amber-100 w-full h-screen">
      <div className="text-4xl text-center pt-5">The Todo App</div>
      <div className="flex justify-center mt-10 flex-col items-center">
        <div>
          <input
            value={todoVal}
            onChange={(e) => setTodoVal(e.target.value)}
            className="bg-gray-500 p-2 m-2 text-lg rounded-2xl text-white pl-4"
            placeholder="Enter a Todo"
          />
          <button
            onClick={addFunction}
            className="bg-purple-500 text-white text-lg rounded-2xl p-2 px-4"
          >
            Add
          </button>
        </div>
        {todoList.map((item, index) => (
          <div className="mt-5 flex w-50/100 justify-between " key={index}>
            <div className="flex items-center border-b w-2/3 pl-7">
              <input
                onChange={() => toggleFunction(index)}
                className="mr-4 w-4 h-4"
                type="checkbox"
              />
              {editIndex === index ? (
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full p-2 text-lg border rounded"
                />
              ) : (
                <p
                  className={
                    item.completed
                      ? "line-through text-lg text-gray-700 italic"
                      : "text-lg"
                  }
                >
                  {item.text}
                </p>
              )}
            </div>
            <div className="w-1/3">
              {editIndex === index ? (
                <button
                  onClick={() => saveEdit(index)}
                  className="bg-green-700 text-white p-2 rounded-xl m-2 px-5"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => editStart(item, index)}
                  className="bg-blue-700 text-white p-2 rounded-xl m-2 px-5"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => deleteFunction(index)}
                className="bg-red-700 text-white p-2 rounded-xl m-2 px-3"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
