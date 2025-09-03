// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🏫 School Management</h1>
      <div className="nav-links">
        <Link to="/add-school">Add School</Link>
        <Link to="/show-schools">Show Schools</Link>
      </div>
    </nav>
  );
}
