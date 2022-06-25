import React, { Component, useEffect } from "react";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import LoginPopUp from "./Components/loginPopUp";
import Popup from "./Components/Commons/popUp";
import RegistrationPopUP from "./Components/registrationPopUp";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Prenotazione from "./Components/prenotazione";
import Programmazione from "./Components/Programmazione";
import { getMovies } from "./Services/moviesService";
import CardAcquisto from "./Components/Commons/filmCardAcquisto";
import { checkWallpaperExist } from "./Utils/searchWallpaperAlgorithm";
import NotFound from "./Components/NotFound";
import { SearchContext } from "./context/searchContext";

class App extends Component {
  state = {
    movies: getMovies(),
    loginPopUp: false,
    registrationPopUp: false,
    search: "",
  };

  handleSearch = (search) => {
    if (search === undefined) return;
    this.setState({ search });
  };
  popUploginHandler = (loginTrigger) => {
    this.setState({ loginPopUp: loginTrigger });
  };

  popUpRegistrationHandler = (registrationTrigger) => {
    this.setState({ registrationPopUp: registrationTrigger });
  };
  // viewHandler = () => {
  //   const { movies } = this.state;
  //   let component;
  //   switch (window.location.pathname) {
  //     case "/":
  //       component = <Home movies={movies} />;
  //       break;
  //     case "/programmazione":
  //       component = <Programmazione movies={movies} />;
  //       break;
  //     case "/prenotaOra":
  //       component = <Prenotazione movies={movies} />;
  //       break;

  //     default:
  //       component = "hi";
  //       break;
  //   }
  //   return component;
  // };

  render() {
    // const [loginPopUp, setLoginPopup] = useState(false);
    // const [registrationPopUp, setRegistrationPopup] = useState(false);
    const { loginPopUp, registrationPopUp, movies, search } = this.state;
    return (
      <React.Fragment>
        <SearchContext.Provider
          value={{ search, setSearch: this.handleSearch }}
        >
          <Popup closePopUp={this.popUploginHandler} trigger={loginPopUp}>
            <LoginPopUp />
          </Popup>

          <Popup
            closePopUp={this.popUpRegistrationHandler}
            trigger={registrationPopUp}
          >
            <RegistrationPopUP />
          </Popup>
          <header>
            <Navbar
              onSearch={this.handleSearch}
              popUpLoginTrigger={this.popUploginHandler}
              popUpRegistrationTrigger={this.popUpRegistrationHandler}
            />
          </header>

          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home movies={movies} />} />

              <Route
                path="programmazione"
                element={<Programmazione movies={movies} />}
              />

              <Route
                path="prenotaOra"
                element={<Prenotazione movies={movies} />}
              >
                {movies.map((movie) => (
                  <Route
                    key={"route" + movie._id}
                    path={`/prenotaOra/:id`}
                    element={<CardAcquisto movies={movies} />}
                  />
                ))}
              </Route>
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Routes>

            {/* {this.viewHandler()} */}
          </div>

          <Footer />
        </SearchContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
