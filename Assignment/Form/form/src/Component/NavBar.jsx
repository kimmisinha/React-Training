import { Link } from "react-router-dom";
import "./NavBar.css";  
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>
        <li>
          <Link to="/Childref">Childref</Link>
        </li>
        <li>
          <Link to="/Parentref">Parentref Component</Link>
        </li>
        <li>
          <Link to="/LoginFormik">LoginFormik Component</Link>
        </li>
        <li>
          <Link to="/SignFormik">SignFormik Component</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
