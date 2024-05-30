import './App.css';
import Users from './Component/Users';
import AddUser from './Component/AddUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/add-user" element={<AddUser />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
