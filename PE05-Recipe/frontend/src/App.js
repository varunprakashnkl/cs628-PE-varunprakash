import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import AddRecipe from './AddRecipe';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Finder</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipe />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;