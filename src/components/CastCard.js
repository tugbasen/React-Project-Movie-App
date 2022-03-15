import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const CastCard = ({ image, casts }) => {
  return (
    <Card className="card shadow mb-5 bg-body rounded" >
      <div style={{ position: "relative" }}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${image}`}
          alt="img"
          className="card-img-top"
        />
      </div>
      <div className="card-body">
        <p className="card-title">
          <b>{casts.name}</b>
        </p>
        <p>{casts.character}</p>
      </div>
    </Card>
  );
};

export default CastCard;
