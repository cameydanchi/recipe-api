import { CategoryModel } from "../models/category.js";

export const getCategories = async (req,res,next)=>{
    try{
    // get allcategory 
    const allcategories = await CategoryModel.find();
    // return
    res.json(allcategories);
    } catch(error){
        next(error)
    }
}

export const postCategory = async (req,res,next) => {
  try {


      // add category to databae
      const newCategory = await CategoryModel.create({
        ...req.body,
        image:req.file.filename
      });
      // retuern the response
      res.status(201).json(newCategory)
  } catch (error) {
     next(error)
  }
}