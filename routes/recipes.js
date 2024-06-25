import { Router } from "express";

// CREATE A ROUTER
const recipeRouter = Router();

// defiine routes

recipeRouter.get('/recipes', (req,res) =>{
    res.json('all recipes')
});

recipeRouter.post('/recipes', (req,res) =>{
    res.json('new recipes')
});

recipeRouter.patch('/recipes/:id', (req,res)=>{
    res.json(`Recipe with id ${req.params.id} updated`)
});
recipeRouter.delete('/recipes/:id', (req,res) => {
    res.json(`recipe with ID ${req.params.id} deleted`)
});


// EXPOR ROUTER
export default recipeRouter;