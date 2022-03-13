import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import {
  CircularProgress,
  Typography,
  withStyles,
  Box,
} from "@material-ui/core";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const MovieDetails = ({ movies }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/634649?api_key=4f298a53e552283bee957836a529baec&language=en-US`
    )
      .then((response) => response.json())
      // .then(response => {console.log(response)})
      .then((response) => {
        setMovie(response);
      });
  }, []);

  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",
    },
  })(Typography);

  return (
    <Container className="detailMovie">
      <div className="detailContainer">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${
            movie && movie.backdrop_path
          }`}
          alt={`${movie} Poster`}
          className="imgBackdrop"
        />
      </div>
      <Container className="detailContent">
        <Row className="img-row container">
          <Col xs={3} className="detailImage">
            <img
              src={`https://image.tmdb.org/t/p/w200/${
                movie && movie.poster_path
              }`}
              alt={`${movie} Poster`}
              className=""
            />
          </Col>
          <Col xs={9} className="content-row">
            <div className="detailMovieName">
              <span className="detailMovieTitle">{movie.original_title} </span>
              <span>({movie.release_date})</span>
            </div>
            <div >
              <span className="detailBox">TV-14</span>
              <span style={{ color: "#fff", margin: 10 }}>{"\u25CF"}</span>
              {/* <span>{movie.genres.map(item => <Button className="genresButton" key={item.id} >{item.name}</Button> )}</span> */}
              {/* <span>{movie.genres.map(({ name }) => name).join(", ")}</span> */}
              <span style={{ color: "#fff", margin: 10 }}>{"\u25CF"}</span>
              <span>{(movie.runtime / 60).toFixed()}h </span>
              <span>{movie.runtime % 60}min </span>
            </div>
            <div className="container detailMovieScore">
              <div className="row">
                <div className="col-2">
                  <span className="scoreContent">
                    <Box
                      position="relative"
                      display="inline-block"
                      className="detailScore"
                    >
                      <Box position="absolute">
                        {/* position: "absolute" */}
                        <CircularProgress
                          className="firstCircule"
                          size={50}
                          variant="determinate"
                          value={100}
                        />
                      </Box>
                      <CircularProgress
                        size={50}
                        className="circule"
                        variant="determinate"
                        value={movie.vote_average * 10}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute" /* position ="absolute" */
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <WhiteTextTypography
                          style={{ fontSize: "13px" }}
                          variant="h6"
                        >
                          {`${movie.vote_average * 10}`}
                          <AiOutlinePercentage
                            style={{ paddingBottom: "5px" }}
                          />
                        </WhiteTextTypography>
                      </Box>
                    </Box>
                  </span>
                  <span className="userScore">
                    <span>
                      User <br /> Score
                    </span>
                  </span>
                </div>

                <div className="col-7">
                  <span style={{ marginLeft: 10 }}>
                    <BsCardList size={30} />
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <FaHeart size={20} />
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <MdBookmarkAdd size={25} />
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <AiFillStar size={25} />
                  </span>
                </div>
              </div>
            </div>
            <div style={{marginBottom: 3}}><i>{movie.tagline}</i></div>
            <div>
              <b>Overview</b>
              <br/>
              {movie.overview}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MovieDetails;