import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";

const categoryRouter = Router();

// deifin route
categoryRouter.get('/categories',getCategories);
categoryRouter.post('/categories',postCategory)


//export route
export default categoryRouter;