import { RecipeModel } from "../models/recipe.js";

export const getRecipe = async (req, res, next) => {
    try {

        // get query params
        const {limit,skip,filter,fields} = req.query;
        const allRecipes = await RecipeModel
        .find(filter ? JSON.parse(filter) : {})
        .select(fields ? JSON.parse(fields) : '')
        .limit(limit ? parseInt(limit) : 10)
        .skip(skip ? parseInt(skip) : 0);
        // return all recipe as response
        res.json(allRecipes)
    } catch (error) {
        next(error)
    }
}
// post recipe

export const postRecipe = async (req, res, next) => {
        // add recipe to database
        try {
            const newRecipe = await RecipeModel.create({
                ...req.body,
                image:req.file.filename
            });
            //  return response
            res.json(newRecipe);
        } catch (error) {
            next(error);
        }
    }

export const patchRecipe = async (req, res,next) => {
   try {

    // update recipe by Id
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    // return response
     res.json(updatedRecipe)
   } catch (error) {
    next(error)
   }
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