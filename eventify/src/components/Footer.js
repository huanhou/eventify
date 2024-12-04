import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const categories = ["Music", "Tech", "Art", "Food", "Business", "Books"];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-column">
          <h4>Company Info</h4>
          <ul>
            <li>
              <Link to="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="footer-link">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#" className="footer-link">
                Account Support
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Event Ticketing
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/events?category=${category}`}
                  className="footer-link"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Eventify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
