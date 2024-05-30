import React, { useState } from "react";
import "../Component/Login.css";
import { FaRegEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
import { useFormik } from "formik";

const LoginFormik = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log("Email:", values.email);
      console.log("Password:", values.password);
    },
  });
  console.log("formik",formik)


  return (
    <div className="main-container">
      <div className="welcome-container">
        <h1 className="Welcome">Welcome</h1>
        <h4 className="subtitle">A</h4>
      </div>
      <div className="box-container">
        <form onSubmit={formik.handleSubmit}>
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

            <hr className="colorful-line" />
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

            <hr className="colorful-line" />
          </div>
          <button type="submit" className="gradient-button">
            Login
          </button>
        </form>
        <div className="footer">
        <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFormik;
