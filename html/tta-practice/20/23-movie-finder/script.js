// OMDb API credentials (Replace with your own API key)
const API_KEY = 'YOUR_OMDB_API_KEY'; // Replace with your actual OMDb API key

// Select DOM elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const moviesSection = document.getElementById('movies-section');

// Handle form submission
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from submitting

    const query = searchInput.value.trim();
    if (!query) {
        alert('Please enter a movie title or keyword.');
        return;
    }

    // Clear previous results
    moviesSection.innerHTML = '<p>Loading...</p>';

    try {
        const movies = await fetchMovies(query);
        displayMovies(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        moviesSection.innerHTML = `<p>Error fetching movies: ${error.message}</p>`;
    }
});

// Fetch movies from OMDb API
async function fetchMovies(query) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.Response === 'False') {
        throw new Error(data.Error);
    }

    return data.Search; // Array of movie objects
}

// Fetch detailed movie information by IMDb ID
async function fetchMovieDetails(imdbID) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.Response === 'False') {
        throw new Error(data.Error);
    }

    return data; // Detailed movie object
}

// Display movies in the DOM
function displayMovies(movies) {
    if (movies.length === 0) {
        moviesSection.innerHTML = '<p>No movies found.</p>';
        return;
    }

    moviesSection.innerHTML = ''; // Clear loading text

    movies.forEach(async (movie) => {
        // Create movie card
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        // Handle missing poster
        const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image';

        movieCard.innerHTML = `
            <img src="${poster}" alt="${sanitizeHTML(movie.Title)} Poster" class="movie-poster">
            <div class="movie-details">
                <h2>${sanitizeHTML(movie.Title)}</h2>
                <p><strong>Year:</strong> ${sanitizeHTML(movie.Year)}</p>
                <p><strong>Type:</strong> ${sanitizeHTML(movie.Type)}</p>
                <a href="#" class="details-btn" data-id="${movie.imdbID}">View Details</a>
            </div>
        `;

        moviesSection.appendChild(movieCard);
    });

    // Add event listeners for details buttons
    const detailsButtons = document.querySelectorAll('.details-btn');
    detailsButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const imdbID = button.getAttribute('data-id');
            try {
                const movieDetails = await fetchMovieDetails(imdbID);
                displayMovieDetails(movieDetails);
            } catch (error) {
                alert(`Error fetching movie details: ${error.message}`);
            }
        });
    });
}

// Display detailed movie information (Modal)
function displayMovieDetails(movie) {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Handle missing poster
    const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image';

    modal.innerHTML = `
        <span class="close-btn">&times;</span>
        <img src="${poster}" alt="${sanitizeHTML(movie.Title)} Poster" class="modal-poster">
        <div class="modal-details">
            <h2>${sanitizeHTML(movie.Title)}</h2>
            <p><strong>Year:</strong> ${sanitizeHTML(movie.Year)}</p>
            <p><strong>Rated:</strong> ${sanitizeHTML(movie.Rated)}</p>
            <p><strong>Released:</strong> ${sanitizeHTML(movie.Released)}</p>
            <p><strong>Runtime:</strong> ${sanitizeHTML(movie.Runtime)}</p>
            <p><strong>Genre:</strong> ${sanitizeHTML(movie.Genre)}</p>
            <p><strong>Director:</strong> ${sanitizeHTML(movie.Director)}</p>
            <p><strong>Writer:</strong> ${sanitizeHTML(movie.Writer)}</p>
            <p><strong>Actors:</strong> ${sanitizeHTML(movie.Actors)}</p>
            <p><strong>Plot:</strong> ${sanitizeHTML(movie.Plot)}</p>
            <p><strong>Language:</strong> ${sanitizeHTML(movie.Language)}</p>
            <p><strong>Country:</strong> ${sanitizeHTML(movie.Country)}</p>
            <p><strong>Awards:</strong> ${sanitizeHTML(movie.Awards)}</p>
            <p><strong>IMDb Rating:</strong> ${sanitizeHTML(movie.imdbRating)}</p>
            <a href="${movie.Website !== 'N/A' ? movie.Website : movie.imdbRating ? `https://www.imdb.com/title/${movie.imdbID}/` : '#'}" target="_blank">More Info</a>
        </div>
    `;

    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    // Close modal on clicking the close button or outside the modal
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modalOverlay);
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });
}

// Function to sanitize user input to prevent XSS
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}
