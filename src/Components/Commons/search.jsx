import React, { Component, useContext } from "react";

import "../../Style/searchStyle.css";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./../../context/searchContext";

class Search extends Component {
  state = {};
  handleSearchBox = (e) => {
    e.currentTarget.value = "";
  };

  useHandleSearch = (e) => {
    e.preventDefault();

    const { navigate, searchContext } = this.props;
    navigate("/programmazione");
    searchContext.setSearch(e.target[0].value);
  };

  useHandleSearchChange = (e) => {
    const { navigate, searchContext } = this.props;

    navigate("/programmazione");
    searchContext.setSearch(e.currentTarget.value);
  };

  handleFocus = () => {
    let focus = !this.state.focus;
    this.setState({ focus });
  };
  render() {
    return (
      <li class="nav-item collapse navbar-collapse">
        <div class="box">
          <form onSubmit={this.useHandleSearch} name="search">
            <input
              onFocus={this.handleFocus}
              onBlur={this.handleFocus}
              onChange={this.useHandleSearchChange}
              type="text"
              class="input"
              name="txt"
              onMouseLeave={this.handleSearchBox}
            />
          </form>
          {!this.state.focus && <i className="fa fa-search"></i>}
        </div>
      </li>
    );
  }
}

export default function (props) {
  let navigate = useNavigate();
  return (
    <SearchContext.Consumer>
      {(searchContext) => (
        <Search {...props} navigate={navigate} searchContext={searchContext} />
      )}
    </SearchContext.Consumer>
  );
}
