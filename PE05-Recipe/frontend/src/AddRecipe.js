import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const AddRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });
  const [recipeList, setRecipeList] = useState([]);
  const backUrl = "http://localhost:5003";

  // Fetch Existing Recipes
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`${backUrl}/api/recipes`);
        setRecipeList(response.data);
      } catch (error) {
        console.error("❌ Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  // Handle Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("🚀 Submitting Recipe:", recipe);

    try {
      await axios.post(`${backUrl}/api/recipes`, recipe);
      alert("Recipe added successfully!");
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("❌ Error submitting recipe:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 shadow-lg rounded-lg">
        <CardContent>
          <Typography variant="h4" className="mb-4 font-bold text-center">
            Add New Recipe
          </Typography>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Recipe Name */}
            <TextField
              label="Recipe Name"
              fullWidth
              variant="outlined"
              value={recipe.name}
              onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
            />

            {/* Ingredients */}
            <TextField
              label="Ingredients"
              fullWidth
              multiline
              rows={2}
              variant="outlined"
              value={recipe.ingredients}
              onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
            />

            {/* Instructions */}
            <TextField
              label="Instructions"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={recipe.instructions}
              onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
            />

            {/* Select Existing Recipe */}
            <FormControl fullWidth>
              <InputLabel>Select an Existing Recipe</InputLabel>
              <Select className="mt-2">
                <MenuItem value="">None</MenuItem>
                {recipeList.map((recipe) => (
                  <MenuItem key={recipe._id} value={recipe._id}>
                    {recipe.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Submit & Back Buttons */}
            <div className="flex justify-between mt-4">
              <Button type="submit" variant="contained" color="primary">
                Add Recipe
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddRecipe;
