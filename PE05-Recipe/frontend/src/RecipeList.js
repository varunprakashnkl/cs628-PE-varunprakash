import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetails.css';
import { Card, CardContent } from '@mui/material';
import { Button } from '@mui/material';



const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const backUrl = 'http://localhost:5003';

  useEffect(() => {
    axios.get(`${backUrl}/api/recipes`)
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Recipe List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <Card key={recipe._id} className="p-4 shadow-lg rounded-lg">
            <CardContent>
              <Link to={`/recipes/${recipe._id}`} className="text-lg font-semibold text-blue-600 hover:underline">
                {recipe.name}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6">
        <Link to="/add">
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Add Recipe
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeList;
