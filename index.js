import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import expressOasGenerator from 'express-oas-generator'
import recipeRouter from './routes/recipe.js';
import 'dotenv/config';

import categoryRouter from './routes/category.js';


 await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();
expressOasGenerator.handleResponses(app,{
    alwaysServeDocs:true,
    tags: ['categories', ' recipes'],
    mongooseModels: mongoose.modelNames(),
})




//apply middleware
app.use(cors())
app.use(express.json());
app.use(express.static('uploads'))


// used routes
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req,res) => res.redirect('/api-docs'));

// listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`app listening on port ${port}`)
});