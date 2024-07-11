const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); 

let recipes = [];

app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});


app.get('/api/recipes/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).send('Recipe not found');
    res.json(recipe);
});


app.post('/api/recipes', (req, res) => {
    const recipe = {
        id: recipes.length + 1,
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        cuisine: req.body.cuisine
    };
    recipes.push(recipe);
    res.status(201).json(recipe);
});

app.put('/api/recipes/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).send('Recipe not found');

    recipe.name = req.body.name;
    recipe.ingredients = req.body.ingredients;
    recipe.instructions = req.body.instructions;
    recipe.cuisine = req.body.cuisine;

    res.json(recipe);
});


app.delete('/api/recipes/:id', (req, res) => {
    const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));
    if (recipeIndex === -1) return res.status(404).send('Recipe not found');

    recipes.splice(recipeIndex, 1);
    res.status(204).send();
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
