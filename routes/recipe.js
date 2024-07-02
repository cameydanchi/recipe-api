import { Router } from "express";

import { deletePatch, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe_control.js";
import { localUpload } from "../middleware/upload.js";

// CREATE A ROUTER
const recipeRouter = Router();
c

// define routes

recipeRouter.get('/recipes', getRecipe);

recipeRouter.post('/recipes', localUpload.single('image'),postRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deletePatch);

recipeRouter.get('/recipes/:id',getRecipes);

// EXPOR ROUTER
export default recipeRouter;