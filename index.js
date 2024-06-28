import express from 'express';
import recipeRouter from './routes/recipe.js';
import mongoose from 'mongoose';
import categoryRouter from './routes/category.js';

await mongoose.connect(process.env.MONGO_URL)

// create express app
const app = express();
//apply middleware
app.use(express.json());

// used routes
app.use(recipeRouter);
app.use(categoryRouter);

// listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`app lsitening on port 3000 ${port}`)
});