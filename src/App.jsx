import "./App.css";
import Home from "./component/Home/Home";
import Layout from "./Layout";
import About from "./component/About/About";
import Contact from "./component/Contacts/Contact";
import User from "./component/User/User";
import { Route, Routes } from "react-router-dom";
import Github from "./component/Github/Github";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="github" element={<Github />} />
        <Route path="user/:userid" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
