import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/test";
import Navbar from "./components/header";
import Login from "./components/login/login";
import Home from "./components/home/Home";
import New from "./components/home/New";

function App() {
  document.body.classList = localStorage.getItem("user.theme");
  return (
    <>
      <BrowserRouter>
        <div>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
