import { Schema, model } from "mongoose";

const recipeSchema = new Schema ({
    name: {type: String},
    ingredients : [{type : String}]

});

export const RecipeModel = model('Recipe',recipeSchema);