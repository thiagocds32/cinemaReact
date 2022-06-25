import React, { Component } from "react";
import ButtonNavbar from "./Commons/buttonNavbar";
import LogoNavbar from "./Commons/logoNavbar";
import "../Style/navbarHeaderStyle.css";
import ButtonDropdown from "./Commons/buttonDropdownNavbar";

import Search from "./Commons/search";
import { SearchContext } from "./../context/searchContext";
import MenuHamburguer from "./Commons/menuHamburguer";
import MenuNascosto from "./menuNascosto";

class Navbar extends Component {
  state = {
    login: false,
  };

  onComponentMount = {
    //// ajax
  };

  hideMenu = (menuOpen) => {
    this.setState({ menuOpen });
  };

  logoutModifier = () => {
    this.setState({ login: false });
  };
  loginModifier = () => {
    this.setState({ login: true });
  };

  loginHandler = () => {
    const { popUpLoginTrigger, popUpRegistrationTrigger } = this.props;
    if (!this.state.login) {
      return (
        <React.Fragment>
          <ButtonDropdown
            dropdownName="Login"
            dropdownEvent1={() => popUpLoginTrigger(true)}
            dropdownEvent2={() => popUpRegistrationTrigger(true)}
            dropdown1="Login"
            dropdown2="Registrati"
          />
        </React.Fragment>
      );
    } else {
      return (
        <ButtonNavbar
          login={this.state.login}
          onLogout={this.logoutModifier}
          innerText={<i class="fa fa-user" aria-hidden="true"></i>}
        />
      );
    }
  };
  render() {
    return (
      <>
        <MenuNascosto menuOpen={this.state.menuOpen} />
        <nav className="navbar-expand-md mainMenu">
          <LogoNavbar>cinema</LogoNavbar>

          <ul className="buttonsNavbarDiv">
            {" "}
            <MenuHamburguer hideMenu={this.hideMenu} />
            <Search />
            <ButtonNavbar link="/programmazione" innerText={"Programmazione"} />
            <ButtonNavbar link="/prenotaOra" innerText={"Prenota Ora"} />
            {this.loginHandler()}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
