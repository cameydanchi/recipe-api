import { Router } from "express";

import { getCategories, postCategory } from "../controllers/category.js";
import {  remoteUploads } from "../middleware/upload.js";


// creat upload middleware

const categoryRouter = Router();

// deifin route
categoryRouter.get('/categories',getCategories);

categoryRouter.post('/categories',remoteUploads.single('image'), postCategory)


//export route
export default categoryRouter;