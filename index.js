import express from 'express';
import recipeRouter from './routes/recipe.js';
import mongoose from 'mongoose';

await mongoose.connect(process.env.MONGO_URL)

// create express app
const app = express();
//apply miiiddleware
app.use(express.json());

// Define route

app.get('/', (req,res) =>{
    res.json('akwaaba');
});
app.post('/login', (req,res) => {
    res.json('login sucessful')
});
app.patch('/update', (req,res) => {
    res.json('update sucessful')
});



// used routes

app.use(recipeRouter);

// listen for incoming requests
app.listen(3000,() => {
    console.log('app lsitening on port 3000')
});