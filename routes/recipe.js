import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

// CREATE A ROUTER
const recipeRouter = Router();

// define routes

recipeRouter.get('/recipes', (req,res) =>{
    res.json('all recipes')
});

recipeRouter.post('/recipes', async (req,res) =>{
     // add recipe
     await RecipeModel.create(req,res);
    
    res.json('recipe added')
});

recipeRouter.patch('/recipes/:id', (req,res)=>{
    res.json(`Recipe with id ${req.params.id} updated`)
});
recipeRouter.delete('/recipes/:id', (req,res) => {
    res.json(`recipe with ID ${req.params.id} deleted`)
});

recipeRouter.get('/recipes/:id', (req,res) =>{
    res.json(`Get recipe with ID ${req.params.id}`)
});

// EXPOR ROUTER
export default recipeRouter;