import express from 'express';
import recipeRouter from './routes/recipes.js';

// create express app
const app =express();

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