import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Starlight Reads!</h2>
        </div>
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/catalog" className="footer-link">Books List</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" className="footer-social-link">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" className="footer-social-link">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" className="footer-social-link">
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="footer-contact">
          <p>Email: <a href="mailto:contact@starlightreads.com">contact@starlightreads.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>Address: <a>123 Starlight Ave, Cityville, Country</a></p>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 Starlight Reads!. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
