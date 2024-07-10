import { Router } from "express";

import { deletePatch, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe_control.js";
import {  remoteUploads } from "../middleware/upload.js";
import { checkUserSession } from "../middleware/auth.js";

// CREATE A ROUTER
const recipeRouter = Router();

// Apply middlewares
// recipeRouter.use(checkUserSession);


// define routes

recipeRouter.get('/recipes', getRecipe);

recipeRouter.post('/recipes', checkUserSession,remoteUploads.single('image'),postRecipe);

recipeRouter.patch('/recipes/:id',checkUserSession, patchRecipe);

recipeRouter.delete('/recipes/:id',checkUserSession, deletePatch);

recipeRouter.get('/recipes/:id',getRecipes);

// EXPOR ROUTER
export default recipeRouter;