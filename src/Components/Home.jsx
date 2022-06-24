import React, { Component } from "react";
import Ticket from "./Commons/ticketsIndex";
import { checkLocandinaExist } from "../Utils/searchLocandinaAlgorithm";
import Slider from "./Commons/slider";

class Home extends Component {
  render() {
    const { movies } = this.props;
    return (
      <React.Fragment>
        {/* <Slider /> */}

        <h1 className="callForActionIndex">
          Fai un acquisto veloce degli ultimi film usciti
        </h1>

        <div class="section ticketsSession">
          {movies.map((movie) => (
            <Ticket
              movie={movie}
              copertina={
                <img
                  className="copertine"
                  src={checkLocandinaExist(movie._id)}
                />
              }
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
