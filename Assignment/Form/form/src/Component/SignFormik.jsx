import React, { useState } from "react";
import "../Component/SignUp.css";
import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { useFormik } from "formik";

function SignFormik() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("Username:", values.username);
      console.log("Email:", values.email);
      console.log("Password:", values.password);
      console.log("Confirm Password:", values.confirmPassword);
    },
  });

  
  return (
    <div className="main-container">
      <div className="welcome-container">
        <h1 className="Welcome">Sign up</h1>
        <h4 className="subtitle">A</h4>
      </div>
      <div className="box-container">
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.errors.username ? (
              <p className="error">{formik.errors.username}</p>
            ) : null}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <p className="error">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <span className="eye-icon" onClick={toggleShowPassword}>
                {showPassword ? <FaRegEye /> : <FaEyeLowVision />}
              </span>
            </div>
            {formik.errors.password ? (
              <p className="error">{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword ? (
              <p className="error">{formik.errors.confirmPassword}</p>
            ) : null}
            <br />
          </div>
          <button type="submit" className="gradient-button">
            Sign up
          </button>
        </form>
        <div className="footer">
          <p>Already have an account?</p>
        </div>
      </div>
    </div>
  );
}
export default SignFormik;
