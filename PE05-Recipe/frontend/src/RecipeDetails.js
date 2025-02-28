import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, Button, TextField, Typography } from "@mui/material";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { id: recipeId } = useParams();
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });
  const backUrl = "http://localhost:5003";

  // Fetch Recipe Details
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`${backUrl}/api/recipes/${recipeId}`);
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchRecipe();
  }, [recipeId]);

  // Update Recipe
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${backUrl}/api/recipes/${recipeId}`, recipe);
      setRecipe(response.data);
      alert("Recipe updated successfully!");
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  // Delete Recipe
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    try {
      await axios.delete(`${backUrl}/api/recipes/${recipeId}`);
      alert("Recipe deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 shadow-lg rounded-lg">
        <CardContent>
          <Typography variant="h4" className="mb-4 font-bold text-center">
            Edit Recipe
          </Typography>

          <TextField
            label="Recipe Name"
            fullWidth
            variant="outlined"
            className="mb-4"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />

          <TextField
            label="Ingredients"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            className="mb-4"
            value={recipe.ingredients}
            onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
          />

          <TextField
            label="Instructions"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            className="mb-4"
            value={recipe.instructions}
            onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
          />

          <div className="flex justify-between">
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update Recipe
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete Recipe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeDetails;
