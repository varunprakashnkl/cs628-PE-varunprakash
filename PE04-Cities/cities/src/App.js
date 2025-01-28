import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CityList from "./components/CityList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";
import "./styles.css"; // Import the new CSS file

const App = () => {
  const [cities, setCities] = useState([
    { id: 1, name: "Seattle", country: "USA", population: "724,000" },
    { id: 2, name: "Paris", country: "France", population: "2.1M" },
    { id: 3, name: "Tokyo", country: "Japan", population: "9.7M" },
  ]);

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <h1>Cities Application</h1>
        </nav>

        <nav className="sub-navbar">
          <Link to="/">Cities List</Link>
          <Link to="/add-city">Add City</Link>
        </nav>

        {/* Page Content */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<CityList cities={cities} />} />
            <Route path="/add-city" element={<AddCity setCities={setCities} />} />
            <Route path="/city/:id" element={<CityDetails cities={cities} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
