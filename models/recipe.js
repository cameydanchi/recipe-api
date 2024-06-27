import { Schema, model } from "mongoose";

const recipeSchema = new Schema ({
    name: {type: String,unique: true , required: true},// validation
    ingredients : [{type : String}]

});

export const RecipeModel = model('Recipe',recipeSchema);