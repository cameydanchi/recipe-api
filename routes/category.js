import { Router } from "express";

import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload } from "../middleware/upload.js";


// creat upload middleware

const categoryRouter = Router();

// deifin route
categoryRouter.get('/categories',getCategories);

categoryRouter.post('/categories',localUpload.single('image'), postCategory)


//export route
export default categoryRouter;