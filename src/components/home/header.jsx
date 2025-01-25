// header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "../../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logolib.jpg" alt="Logo" />
        <h1>Starlight Reads!</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Books Categories</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/category1">Category 1</Link>
              </li>
              <li>
                <Link to="/category2">Category 2</Link>
              </li>
              <li>
                <Link to="/category3">Category 3</Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <div className="favorites-badge">
            <li>
              <Link to="/favoris"><FaHeart size={24} color="#036280" /></Link>
            </li>
            <FaShoppingCart size={24} color="#036280" style={{ marginLeft: "10px" }} />
          </div>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/signin">
          <button className="sign-in">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="sign-up">Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
