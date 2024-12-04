import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Use the UserContext

const AuthPage = () => {
  const { login } = useUser(); // Access login function from UserContext
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAuth = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (isLogin) {
      // Handle login
      const user = storedUsers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (user) {
        login(user); // Update context with the logged-in user
        navigate("/");
      } else {
        alert("Invalid credentials!");
      }
    } else {
      // Handle registration
      const isExisting = storedUsers.some((u) => u.email === formData.email);
      if (isExisting) {
        alert("User already exists!");
      } else {
        storedUsers.push(formData);
        localStorage.setItem("users", JSON.stringify(storedUsers));
        alert("Registration successful! Please log in.");
        setIsLogin(true);
      }
    }
  };

  const toggleAuth = () => {
    setIsLogin((prev) => !prev);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-info">
          <h2>Discover tailored events.</h2>
          <p>Sign up for personalized recommendations today!</p>
        </div>
        <div className="auth-form">
          <h3>{isLogin ? "Login" : "Create Account"}</h3>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button onClick={handleAuth}>
            {isLogin ? "Login" : "Create Account"}
          </button>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={toggleAuth}>{isLogin ? "Sign Up" : "Log In"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
