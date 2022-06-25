import React from "react";

import "../Style/menuNascostoStyle.css";
import { Link } from "react-router-dom";

const MenuNascosto = ({ menuOpen }) => {
  return (
    <div className={menuOpen ? "" : "collapse"}>
      <div class="p-4" id="menumobileNascosto">
        <Link
          to="/programmazione"
          class="nav-link menumobileNascosto"
          aria-expanded="false"
        >
          Programamazione
        </Link>

        <Link
          to="/prenotaOra"
          class="nav-link menumobileNascosto"
          aria-expanded="false"
        >
          Prenota Ora
        </Link>

        {/* <button
          class="nav-link menumobileNascosto buttonLoggedIn"
          id="logoutMenuNascosto"
          aria-expanded="false"
        >
          Log Out
        </button>
        <button
          class="nav-link menumobileNascosto buttonLoggedOut"
          id="registrazioneMenuNascosto"
          aria-expanded="false"
        >
          Registrati
        </button>

        <button
          class="nav-link menumobileNascosto buttonLoggedOut"
          id="loginMenuNascosto"
          aria-expanded="false"
        >
          Login
        </button> */}
      </div>
    </div>
  );
};

export default MenuNascosto;
