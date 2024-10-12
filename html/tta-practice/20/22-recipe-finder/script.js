// Edamam API credentials (Replace with your own API key and ID from Edamam)
const APP_ID = 'YOUR_APP_ID';
const APP_KEY = 'YOUR_APP_KEY';

// Select DOM elements
const recipeForm = document.getElementById('recipe-form');
const queryInput = document.getElementById('query');
const resultsContainer = document.getElementById('results-container');

// Handle form submission
recipeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = queryInput.value.trim();

    if (!query) {
        alert('Please enter an ingredient or dish name');
        return;
    }

    try {
        const recipes = await fetchRecipes(query);
        displayRecipes(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        alert('Failed to fetch recipes. Please try again.');
    }
});

// Fetch recipes from Edamam API
async function fetchRecipes(query) {
    const url = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}&to=12`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.hits; // Array of recipes
}

// Display fetched recipes
function displayRecipes(recipes) {
    resultsContainer.innerHTML = ''; // Clear previous results

    if (recipes.length === 0) {
        resultsContainer.innerHTML = '<p>No recipes found. Try another search.</p>';
        return;
    }

    recipes.forEach((recipeData) => {
        const recipe = recipeData.recipe;

        // Create recipe card
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.label}">
            <h3>${recipe.label}</h3>
            <a href="${recipe.url}" target="_blank">View Recipe</a>
        `;

        resultsContainer.appendChild(recipeCard);
    });
}
