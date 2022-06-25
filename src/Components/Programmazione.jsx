import React, { Component, useContext, useEffect } from "react";
import FilmCardSearch from "./Commons/filmCardSearch";

import { checkWallpaperExist } from "../Utils/searchWallpaperAlgorithm";
import { checkLocandinaExist } from "../Utils/searchLocandinaAlgorithm";
import "../Style/programmazioneStyle.css";
import { useParams } from "react-router-dom";
import { SearchContext } from "./../context/searchContext";

class Programmazione extends Component {
  state = {};

  // componentWillReceiveProps(nextProps) {
  //   const search = nextProps.search;
  //   if (search === undefined) return;
  //   this.setState({ search });
  // }

  moviesProgramHandler = (movies) => {
    const { searchContext } = this.props;

    const search = searchContext.search;
    if (search === undefined) return movies;

    const searchLower = search.toLowerCase();
    const moviesBySearch = movies.filter((m) =>
      m.title.toLowerCase().includes(searchLower)
    );
    return moviesBySearch;
  };

  render() {
    const { movies } = this.props;

    const moviesProgram = this.moviesProgramHandler(movies);
    return (
      <div className="section" id="allMovieCards">
        {moviesProgram.map((movie) => (
          <FilmCardSearch
            key={movie._id}
            movie={movie}
            movieWallpaper={<img src={checkWallpaperExist(movie._id)} />}
            movieLocandina={
              <img className="locandina" src={checkLocandinaExist(movie._id)} />
            }
          />
        ))}
      </div>
    );
  }
}

export default function (props) {
  let params = useParams();

  return (
    <SearchContext.Consumer>
      {(searchContext) => (
        <Programmazione
          {...props}
          params={params}
          searchContext={searchContext}
        />
      )}
    </SearchContext.Consumer>
  );
}
