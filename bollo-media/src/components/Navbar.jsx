import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // <-- we'll create this next

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo and brand */}
        <Link to="/" className="navbar-logo">
          <img src="/assets/logo.jpg" alt="Bollo Media" className="logo-img" />
          <span className="brand-name">Bollo Media</span>
        </Link>

        {/* Navigation links */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
            Services
          </NavLink>
          <NavLink to="/production" className={({ isActive }) => (isActive ? "active" : "")}>
            Production
          </NavLink>
         
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
