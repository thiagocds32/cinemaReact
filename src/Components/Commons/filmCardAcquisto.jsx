import React, { Component } from "react";
import "../../Style/filmCardAcquistoStyle.css";
import { useParams } from "react-router-dom";
import { checkWallpaperExist } from "./../../Utils/searchWallpaperAlgorithm";

const CardAcquisto = (props) => {
  const { movies } = props;
  let params = useParams();
  let currentMovie = movies.find((movie) => movie._id === params.id);

  return (
    <div className="movie_cardAcquisto">
      <div className="info_sectionAcquisto">
        <div className="movie_headerAcquisto">
          <div className="filmTitleCardAcquisto">{currentMovie.title}</div>
          <div className="filmRegiaCardAcquisto">
            {currentMovie.publishDate}, by {currentMovie.director}
          </div>
          <div className="filmDurationAcquisto">
            <p className="cardLabelAcquisto">Durata:</p>
            <span className="minutesAcquisto">{currentMovie.duration} min</span>
          </div>
          <div className="filmGenreAcquisto">
            <p className="cardLabelAcquisto">Genere:</p>{" "}
            <p className="genreAcquisto">{currentMovie.genre}</p>
          </div>
        </div>
        <div className="movie_descAcquisto">{currentMovie.description}</div>
      </div>
      <div className="blur_backAcquisto">
        <img src={checkWallpaperExist(params.id)} />
      </div>
    </div>
  );
};

export default CardAcquisto;
