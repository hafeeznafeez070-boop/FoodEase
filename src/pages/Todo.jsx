import { useEffect, useState } from "react";
import TodoInputs from "../component/TodoInputs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
export default function Todo() {
  const navigate = useNavigate();
  const [val, setVal] = useState("");
  const [todoVal, setTodoVal] = useState("");
  const [todos, setTodos] = useState([]);

  const todoFunc = () => {
    if (val) {
      setTodoVal(myTodos.push(val));
      setVal("");
    }
  };

  const getTodos = async () => {
    try {
      const todos = await axios.get("https://dummyjson.com/todos");
      console.log(todos.data);
      toast.success("todos fetched");
      setTodos(todos.data.todos);
    } catch (error) {
      toast.error("todos fetched failed");
      console.log(error.message);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    getTodos();
    if (!token) {
      navigate("/login");
    }
  }, []);
  const logout = () => {
    navigate("/login");
    window.localStorage.clear();
  };
  return (
    <div className="w-full h-screen bg-amber-50 overflow-hidden flex items-center flex-col">
      <div className="w-90/100 flex items-center justify-between">
        <h1 className="text-4xl m-4"></h1>
        <button
          onClick={() => logout()}
          type="button"
          className="w-25 mt-2 focus:outline-none  text-white bg-gray-700 hover:bg-gray-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-3 ml-2 mb-2 cursor-pointer "
        >
          Logout
        </button>
      </div>
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
      {todos &&
        todos.map((todo, index) => (
          <TodoInputs key={index} todoVal={todo} todos={todos} />
        ))}
    </div>
  );
}
