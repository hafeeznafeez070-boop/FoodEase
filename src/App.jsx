import "./App.css";
import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Todo />} />
      {/* <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="github" element={<Github />} />
        <Route path="user/:userid" element={<User />} />
      </Route> */}
    </Routes>
  );
}

export default App;
