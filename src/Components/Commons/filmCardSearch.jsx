import React, { Component } from "react";
import "../../Style/filmCardSearchStyle.css";
import { Link } from "react-router-dom";

const FilmCardSearch = (props) => {
  const { movie, movieWallpaper, movieLocandina } = props;
  return (
    <React.Fragment>
      <div className="movie_card">
        <div className="info_section">
          <div className="movie_header">
            {movieLocandina}
            <h1 className="filmTitleCard">{movie.title}</h1>
            <h4 className="filmRegiaCard">
              {movie.publishDate}, by {movie.director}
            </h4>
            <span className="filmDuration">{movie.duration} min</span>
            <p className="filmGenre">{movie.genre}</p>
            <p className="filmDescription">{movie.description}</p>
          </div>

          <div className="movie_info">
            <ul>
              <li>
                <Link
                  to={`/prenotaOra/${movie._id}`}
                  name=""
                  className="moreInfoButton"
                >
                  <span className="scopriDiuPiu">Scopri di più</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back">{movieWallpaper}</div>
      </div>
    </React.Fragment>
  );
};

export default FilmCardSearch;
