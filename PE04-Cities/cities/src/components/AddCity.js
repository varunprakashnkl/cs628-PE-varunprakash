import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCity = ({ setCities }) => {
  const [city, setCity] = useState({ name: "", country: "", population: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCities((prevCities) => [...prevCities, { ...city, id: Date.now() }]);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Country:</label>
          <input type="text" name="country" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Population:</label>
          <input type="text" name="population" onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
