import "./App.css";
import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Login from "./pages/login";
import Todo2 from "./pages/Todo2";

function App() {
  return <Todo2 />;
}

export default App;

// <Routes>

/* <Route path="/login" element={<Login />} /> */

/* <Route path="/" element={<Todo2 />} /> */
/* <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="github" element={<Github />} />
        <Route path="user/:userid" element={<User />} />
      </Route> */

/* </Routes> */
