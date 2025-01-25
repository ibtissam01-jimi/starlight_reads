import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = [
    {
      email: "aya@example.com",
      password: "aya123",
      name: "Aya El Hannach",
      role: "Admin",
      phone: "+212 6 1234 5678",
      address: "1234 Avenue, Casablanca, Morocco",
    },
    {
      email: "ibtissam@example.com",
      password: "ibtissam123",
      name: "Ibtissam El jomi",
      role: "Admin",
      phone: "+212 6 9876 5432",
      address: "5678 Boulevard, Marrakesh, Morocco",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/admin");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="bodySign">
      <div className="auth-wrapper">
        <div className="auth-image">
          <img className="auth-image-img" src="/images/sign.png" alt="sign-in" />
        </div>
        <div className="auth-container">
          <h2 className="auth-heading">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="auth-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="auth-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <div className="forgot-password">
              <a href="/forgot-password">Forgot your password?</a>
            </div>
            <button className="auth-button" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
