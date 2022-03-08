import React from "react";
import { CircularProgress, Typography, withStyles, Box } from "@material-ui/core";
import { AiOutlinePercentage } from 'react-icons/ai'

const MovieCard = ({ movies }) => {
  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography)
  
  return (
    <div className="card shadow mb-5 bg-body rounded">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movies && movies.poster_path}`}
          alt={`${movies} Poster`}
          className="card-img-top"
        />
        {/* <span className="card__rating">{movies.vote_average}</span> */}
        <span>
          <Box position="relative" display="inline-block" className="score" >
            <Box  position="absolute">
              <CircularProgress
                className="firstCircule"
                size={50}
                variant="static"
                value={100}
              />
            </Box>
            <CircularProgress  size={50} className="circule" variant="static" value={(movies.vote_average)*10} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <WhiteTextTypography style={{fontSize: '13px'}}  variant="h7" >
                {`${(movies.vote_average)*10}`}
                <AiOutlinePercentage style={{paddingBottom: '5px'}} />
              </WhiteTextTypography>
            </Box>
          </Box>
        </span>
      </div>
      <div className="card-body">
        <text className="card-title">
          <b>{movies.title}</b>
        </text>
        <p className="card-text">{movies.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
