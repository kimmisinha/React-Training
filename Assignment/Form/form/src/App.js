import './App.css';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Childref from './Component/Childref';
import Parentref from './Component/Parentref'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/"  element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/Childref" element={<Childref/>} />
          <Route path="/Parentref" element={<Parentref/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
