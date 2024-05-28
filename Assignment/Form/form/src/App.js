import './App.css';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Childref from './Component/Childref';
import Parentref from './Component/Parentref';
import LoginFormik from './Component/LoginFormik';
import SignFormik from './Component/SignFormik';
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/Childref" element={<Childref/>} />
          <Route path="/Parentref" element={<Parentref/>} />
          <Route path="/LoginFormik" element={<LoginFormik/>} />
          <Route path="/SignFormik" element={<SignFormik/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
