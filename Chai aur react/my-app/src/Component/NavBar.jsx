import { Link } from "react-router-dom";
import "./NavBar.css";
import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
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
          <Link to="/PureComp">Pure Component</Link>
        </li>
        <li>
          <Link to="/Formikvalidate">Formikvalidate Component</Link>
        </li>
        <li>
          <Link to="/Counter">Counter Component</Link>
        </li>
        <li>
          <Link to="/games-component">Game Component</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
