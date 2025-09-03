// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddSchool from "./pages/addSchool";
import ShowSchools from "./pages/showSchools";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/show-schools" />} />
        <Route path="/add-school" element={<AddSchool />} />
        <Route path="/show-schools" element={<ShowSchools />} />
      </Routes>
    </Router>
  );
}

export default App;
