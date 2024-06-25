document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.querySelector('.movie-list');
    const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    // Fetch movies from TMDb API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            renderMovies(data.results);
        })
        .catch(error => console.error('Error fetching movies:', error));

    // Function to render movies
    const renderMovies = (movies) => {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            movieItem.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            movieList.appendChild(movieItem);
        });
    };
});
