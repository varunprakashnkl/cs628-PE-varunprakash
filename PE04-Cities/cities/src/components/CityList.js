import React from "react";
import { Link } from "react-router-dom";

const CityList = ({ cities }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Cities List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cities.map((city) => (
          <Link
            to={`/city/${city.id}`}
            key={city.id}
            className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{city.name}</h3>
            <p className="text-gray-600">{city.country}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CityList;
