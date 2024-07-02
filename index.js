import express from 'express';
import mongoose from 'mongoose';
import expressOasGenerator from 'express-oas-generator'
import recipeRouter from './routes/recipe.js';

import categoryRouter from './routes/category.js';
import 'dotenv/config';

 await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();
expressOasGenerator.handleResponses(app,{
    tags: ['categories', ' recipes'],
    mongooseModels: mongoose.modelNames(),
})




//apply middleware
app.use(express.json());

// used routes
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req,res) => res.redirect('/api-docs'));

// listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`app lsitening on port ${port}`)
});