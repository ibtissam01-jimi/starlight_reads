import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../../styles/NavbarAdmin.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name);
    }
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="navbarNav">
      <div className="logoNav">
        <img src="/images/logolib.jpg" alt="Logo" />
        <h1>Starlight Reads!</h1>
      </div>
      
      <div className="burger-menu" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`navbar-listNav ${showMobileMenu ? "show" : ""}`}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        
        <li className="dropdownNav" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span>Books</span>
          {showDropdown && (
            <ul className="dropdown-menuNav">
              <li><Link to="/edit_delete_books">Books List</Link></li>
              <li><Link to="/add-book">Add Books</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/loans">Loans</Link></li>
      </ul>

      <div className="profile-sectionNav">
        <Link to="/profile" className="profile-linkNav">
          <FaUserCircle size={28} color="#ffffff" className="profile-iconNav" />
          <span className="profile-textNav">
            {userName && <span className="admin-nameNav">{userName}</span>}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
