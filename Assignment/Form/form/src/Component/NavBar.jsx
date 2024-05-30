import { Link } from "react-router-dom";
import "./NavBar.css";  
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>
        <li>
          <Link to="/login-formik">LoginFormik Component</Link>
        </li>
        <li>
          <Link to="/sign-formik">SignFormik Component</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
