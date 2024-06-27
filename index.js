import express from 'express';
import recipeRouter from './routes/recipe.js';
import mongoose from 'mongoose';

await mongoose.connect(process.env.MONGO_URL)

// create express app
const app = express();
//apply middleware
app.use(express.json());

// used routes
app.use(recipeRouter);

// listen for incoming requests
app.listen(3000,() => {
    console.log('app lsitening on port 3000')
});