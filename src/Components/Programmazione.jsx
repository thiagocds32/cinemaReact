import React, { Component, useEffect } from "react";
import FilmCardSearch from "./Commons/filmCardSearch";

import { checkWallpaperExist } from "../Utils/searchWallpaperAlgorithm";
import { checkLocandinaExist } from "../Utils/searchLocandinaAlgorithm";
import "../Style/programmazioneStyle.css";
import { useParams } from "react-router-dom";

class Programmazione extends Component {
  state = {};

  componentDidMount() {
    const search = this.props.search;
    if (search === undefined) return;
    this.setState({ search });
  }
  componentWillReceiveProps(nextProps) {
    const search = nextProps.search;
    if (search === undefined) return;
    this.setState({ search });
  }

  moviesProgramHandler = (movies) => {
    const search = this.state.search;
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

  return <Programmazione {...props} params={params} />;
}
