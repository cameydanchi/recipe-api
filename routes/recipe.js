import { Router } from "express";

import { deletePatch, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe_control.js";

// CREATE A ROUTER
const recipeRouter = Router();

// define routes

recipeRouter.get('/recipes', getRecipe);

recipeRouter.post('/recipes', postRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deletePatch);

recipeRouter.get('/recipes/:id',getRecipes);

// EXPOR ROUTER
export default recipeRouter;