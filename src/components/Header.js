import React from "react";
import { Link, useLocation  } from "react-router-dom";
import "./HeaderStyle.css";

function Header() {

  const location = useLocation(); // Get the current URL

  const isActive = (path) => location.pathname === path; // Check if the path matches the current URL

  return (
    <header className="header">
      <nav className="nav">
        <Link
          to="/" 
          className={`nav-link ${isActive("/") ? "active" : ""}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`nav-link ${isActive("/about") ? "active" : ""}`}
        >
          About
        </Link>
        <Link
          to="/submit-activity"
          className={`nav-link ${isActive("/submit-activity") ? "active" : ""}`}
        >
          Submit Activity
        </Link>
        <Link
          to="/suggestions"
          className={`nav-link ${isActive("/suggestions") ? "active" : ""}`}
        >
          Suggestions
        </Link>
      </nav>
    </header>
  );
}

export default Header;
