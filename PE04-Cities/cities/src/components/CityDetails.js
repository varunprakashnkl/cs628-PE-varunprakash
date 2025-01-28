import React from "react";
import { useParams, Link } from "react-router-dom";

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities.find((city) => city.id.toString() === id);

  if (!city) {
    return <h2 className="text-center text-red-600">City Not Found</h2>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">{city.name}</h2>
      <p className="text-gray-700"><strong>Country:</strong> {city.country}</p>
      <p className="text-gray-700"><strong>Population:</strong> {city.population}</p>
      <Link to="/" className="mt-4 block text-blue-600 hover:underline">⬅ Back to Cities</Link>
    </div>
  );
};

export default CityDetails;
