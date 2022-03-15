import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";

import MovieSum from "../components/MovieSum";
import CastCard from "../components/CastCard";

const MovieDetails = ({ movieDetail }) => {
  const [movies, setMovies] = useState([]);
  const [casts, setCasts] = useState([]);

  // const movieId = 634649;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/634649?api_key=4f298a53e552283bee957836a529baec&language=en-US`
    )
      .then((response) => response.json())
      // .then(response => {console.log(response)})
      .then((response) => {
        setMovies(response);

        fetch(
          `https://api.themoviedb.org/3/movie/634649/credits?api_key=4f298a53e552283bee957836a529baec`
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response.cast);
            setCasts(response.cast);
          });
      });
  }, []);

  return (
    <div className="container">
      <div className="movieSumContainer">
        {/* <MovieSum
          movie={movies}
          movieBackdrop={movies.backdrop_path}
          moviePosterPath={movies.poster_path}
          movieTitle={movies.original_title}
          movieReleaseDate={movies.release_date}
          movieRuntime={movies.runtime}
          movieVoteAverage={movies.vote_average}
          movieTagline={movies.tagline}
          movieOverview={movies.overview}
        /> */}
        movieSumContainer
      </div>
      <div className="castContainer ">
        <h3>Series Casts</h3>
        <div className="card-group grid casts ">
            {casts &&
              casts.map((cast) => (
                <React.Fragment key={cast.credit_id}>
                  {cast.profile_path && (
                    <CardGroup className="castCardardGroups">
                      <CastCard
                        image={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                        casts={cast}
                      />
                    </CardGroup>
                  )}
                </React.Fragment>
              ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
