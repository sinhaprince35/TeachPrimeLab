import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";
import logo from "../Assets/Logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from "axios";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const payload = {
    email,
    password,
  };

  const onHendell = (e) => {
    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (password === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      axios
        .post("http://localhost:8080/login", payload)
        .then((res) => navigate("/dashboard"))
        .catch((err) => console.log(err));
    }
    e.preventDefault();
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h4>Online Project Management</h4>
        </div>
        <div className="form-container">
          <form onSubmit={onHendell}>
            <h3>Login to get started</h3>
            <span style={{ color: emailError ? "red" : "" }}>Email</span>
            <div className="Username-input-container">
              <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? "error" : ""}
              />
            </div>
            {emailError && (
              <span className="error-text">Email is required</span>
            )}
            <span style={{ color: passwordError ? "red" : "" }}>Password</span>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={passwordError ? "error" : ""}
              />
              <span
                className={`password-toggle ${showPassword ? "visible" : ""}`}
                onClick={toggleShowPassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passwordError && (
              <span className="error-text">Password is required</span>
            )}
            <div className="forgot-password">
              <a href="#" className="red-link">
                Forgot Password?
              </a>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
