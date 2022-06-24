import React, { Component } from "react";
import CardAcquisto from "./Commons/filmCardAcquisto";
import SelectDropDown from "./Commons/selectDropDownMenu";
import { checkWallpaperExist } from "../Utils/searchWallpaperAlgorithm";
import { Outlet } from "react-router-dom";

class Prenotazione extends Component {
  state = {};

  movieChangeHandler = (movie) => {
    this.setState({ currentMovie: movie });
  };

  // cardHandler = () => {
  //   const { currentMovie } = this.state;
  //   if (this.state.currentMovie === undefined) {
  //     return "";
  //   } else {
  //     return (
  //       <CardAcquisto
  //         wallpaperImage={<img src={checkWallpaperExist(currentMovie._id)} />}
  //         currentMovie={currentMovie}
  //       />
  //     );
  //   }
  // };

  render() {
    const { movies } = this.props;
    return (
      <React.Fragment>
        <SelectDropDown
          onMovieChange={this.movieChangeHandler}
          selectTitle={"Scegli Un Film"}
          selectContent={movies}
        />
        <Outlet />
        {/* {this.cardHandler()} */}
      </React.Fragment>
    );
  }
}

export default Prenotazione;
