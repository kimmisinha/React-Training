import "./App.css";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginFormik from "./Component/LoginFormik";
import SignFormik from "./Component/SignFormik";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login-formik" element={<LoginFormik />} />
          <Route path="/sign-formik" element={<SignFormik />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
