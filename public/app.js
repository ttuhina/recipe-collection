const API_URL = 'http://localhost:3000/api/recipes';

const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');

function fetchRecipes() {
    fetch(API_URL)
        .then(response => response.json())
        .then(recipes => {
            recipeList.innerHTML = '';
            recipes.forEach(recipe => {
                const recipeCard = createRecipeCard(recipe);
                recipeList.appendChild(recipeCard);
            });
        });
}


function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'bg-white p-6 rounded-lg shadow-md';
    card.innerHTML = `
        <h2 class="text-xl font-bold mb-2">${recipe.name}</h2>
        <p class="mb-2"><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        <p class="mb-2"><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p class="mb-4"><strong>Instructions:</strong> ${recipe.instructions}</p>
        <button onclick="editRecipe(${recipe.id})" class="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
        <button onclick="deleteRecipe(${recipe.id})" class="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
    `;
    return card;
}


recipeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const recipeId = document.getElementById('recipeId').value;
    const recipe = {
        name: document.getElementById('name').value,
        ingredients: document.getElementById('ingredients').value,
        instructions: document.getElementById('instructions').value,
        cuisine: document.getElementById('cuisine').value
    };

    if (recipeId) {
      
        fetch(`${API_URL}/${recipeId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipe)
        }).then(() => {
            fetchRecipes();
            recipeForm.reset();
            document.getElementById('recipeId').value = '';
        });
    } else {
     
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipe)
        }).then(() => {
            fetchRecipes();
            recipeForm.reset();
        });
    }
});

function editRecipe(id) {
    fetch(`${API_URL}/${id}`)
        .then(response => response.json())
        .then(recipe => {
            document.getElementById('recipeId').value = recipe.id;
            document.getElementById('name').value = recipe.name;
            document.getElementById('ingredients').value = recipe.ingredients;
            document.getElementById('instructions').value = recipe.instructions;
            document.getElementById('cuisine').value = recipe.cuisine;
        });
}


function deleteRecipe(id) {
    if (confirm('Are you sure you want to delete this recipe?')) {
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(() => fetchRecipes());
    }
}

fetchRecipes();