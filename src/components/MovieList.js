import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [movies, setMovies] = useState();

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec`
  //     )
  //     .then(({ data }) => setMovies(data.results))
  //     .catch((err) => console.log(err));
  // }, []);

  const fetchMovies = (path) => {
    fetch(path)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setMovies(response.results);
      });
  };

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec`;
    fetchMovies(endpoint);
  }, []);

  return (
    <div>
      <div className="">
        <div className="movie-container">
          {movies &&
            movies.map((movie) => <MovieCard movies={movie} key={movie.id} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
