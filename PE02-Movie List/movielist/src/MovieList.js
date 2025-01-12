import React, { useState } from "react";
import "./MovieList.css"; // Styling file

const MovieList = () => {
  // Step 1: Define movie data
  const movies = [
    { title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
    { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
    { title: "Avatar", genre: "Science Fiction", releaseYear: 2009 },
    { title: "Forrest Gump", genre: "Drama", releaseYear: 1994 },
  ];

  // Step 2: Manage state for genre filtering
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  // Step 3: Get unique genres for the dropdown
  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  // Step 4: Filter movies based on selected genre
  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  // Step 5: Handle movie click to show alert
  const handleMovieClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  return (
    <div className="movie-list-container">
      <h1>Movie List</h1>

      {/* Dropdown for filtering genres */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="genre-dropdown"
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Display filtered movie list */}
      <ul className="movie-list">
        {filteredMovies.map((movie) => (
          <li
            key={movie.title}
            className="movie-item"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
