import { RecipeModel } from "../models/recipe.js";



export const getRecipe = async (req, res, next) => {
    try {
        // get all recipe from database
        const allRecipes = await RecipeModel.find();
        // return all recipe as response
        res.json(allRecipes)
    } catch (error) {
        next(error)
    }
}
// pst recipe

export const postRecipe = async (req, res, next) => {
        // add recipe to database
        try {
            const newRecipe = await RecipeModel.create(req.body);
            //  return response
            res.json(newRecipe);
        } catch (error) {
            next(error);
        }
    }

export const patchRecipe = (req, res) => {
    res.json(`Recipe with id ${req.params.id} updated`)
}

export const deletePatch = async (req, res, next) => {
    try {
        // delete recipe by id
        const deletedReciipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // return response
        res.json(deletePatch)
    } catch (error) {
        next(error)
    }
}


export const getRecipes = (req, res) => {
    res.json(`Get recipe with ID ${req.params.id}`)
}