import { Link } from "react-router-dom";
import "./NavBar.css";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">ClassComponent</Link>
        </li>

        <li>
          <Link to="/functioncomponent">Function Component</Link>
        </li>
        <li>
          <Link to="/functioncomponent/jsxcomponent">JSX Component</Link>
        </li>
        <li>
          <Link to="/functioncomponent/statecomponent">State Component</Link>
        </li>
        <li>
          <Link to="/functioncomponent/events">Events</Link>
        </li>
        <li>
          <Link to="/propcomponent">Prop Component</Link>
        </li>
        <li>
          <Link to="/batching">Batching</Link>
        </li>
        <li>
          <Link to="/keys">Keys</Link>
        </li>
        <li>
          <Link to="/lists">Lists</Link>
        </li>
        <li>
          <Link to="/conditional">Conditional</Link>
        </li>
        <li>
          <Link to="/controlledcomponent">Controlled Component</Link>
        </li>
        <li>
          <Link to="/uncontrolledcomponent">Uncontrolled Component</Link>
        </li>
        <li>
          <Link to="/pure-comp">Pure Component</Link>
        </li>
        <li>
          <Link to="/formik-validate">Formikvalidate Component</Link>
        </li>
        <li>
          <Link to="/counter">Counter Component</Link>
        </li>
        <li>
          <Link to="/games-component">Game Component</Link>
        </li>
        <li>
          <Link to="/axios">axios Component</Link>
        </li>
        <li>
          <Link to="/axios-post">AxiosPost Component</Link>
        </li>
        <li>
          <Link to="/proptypes">proptypes Component</Link>
        </li>
        <li>
          <Link to="/element-component">element-component</Link>
        </li>
        <li>
          <Link to="/child-a">Props-component</Link>
        </li>
        <li>
          <Link to="/use-reducer">use-Reducer-component</Link>
        </li>
        <li>
          <Link to="/lazy-loading">lazy-loading-component</Link>
        </li>
        <li>
          <Link to="/functiona-componentWillUnmount">
            functiona-componentWillUnmount-component
          </Link>
        </li>
        <li>
          <Link to="/react-query">React-Query</Link>
        </li>
        <li>
          <Link to="/ReactMutation">ReactMutation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
