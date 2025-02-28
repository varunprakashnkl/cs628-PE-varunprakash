import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    instructions: String
});

export default mongoose.model("Recipe", RecipeSchema);
