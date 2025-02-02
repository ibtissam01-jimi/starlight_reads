// header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "../../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logolib.jpg" alt="Logo" />
        <h1>Starlight Reads!</h1>
      </div>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} color="#036280" /> : <FaBars size={30} color="#036280" />}
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
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
        </ul>
      </nav>
      <div className="favorites-badge">
        <Link to="/favoris">
          <FaHeart size={24} color="#036280" />
        </Link>
        <FaShoppingCart size={24} color="#036280" style={{ marginLeft: "10px" }} />
      </div>
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
