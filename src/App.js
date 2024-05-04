import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";

const Logout = () => {
  localStorage.removeItem("email");
  window.location.href = "/";
};

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Header />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Home" element={<Home />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="*" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
