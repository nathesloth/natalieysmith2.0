import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container2">
        <Link to="/" className="navbar-brand">
          Your Logo
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
