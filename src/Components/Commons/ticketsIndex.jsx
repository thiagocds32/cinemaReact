import React, { Component } from "react";
import "../../Style/ticketsStyle.css";
import { Link } from "react-router-dom";

const Ticket = (props) => {
  const { movie, copertina } = props;

  return (
    <div class="ticketGeneric">
      <Link
        to={`/prenotaOra/${movie._id}`}
        name=""
        class="redirectTicketsButton"
      ></Link>
      <span class="top-dots">
        <span class="section dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </span>
      <span class="movieTitle">{movie.title.toUpperCase()}</span>

      <div class="copertinaDiv">{copertina}</div>

      <span class="section dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="acquista">
        <p class="callForActionTickets">Acquista Biglietti</p>
      </div>

      <span class="bottom-dots">
        <span class="section dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </span>
    </div>
  );
};

export default Ticket;
