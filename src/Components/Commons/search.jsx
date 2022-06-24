import React, { Component } from "react";

import "../../Style/searchStyle.css";
import { useNavigate } from "react-router-dom";

class Search extends Component {
  handleSearchBox = (e) => {
    e.currentTarget.value = "";
  };

  useHandleSearch = (e) => {
    e.preventDefault();

    this.props.navigate("/programmazione");
    this.props.onSearch(e.target[0].value);
  };

  useHandleSearchChange = (e) => {
    console.log("aa");
    this.props.navigate("/programmazione");
    this.props.onSearch(e.currentTarget.value);
  };
  render() {
    return (
      <li class="nav-item">
        <div class="box">
          <form onSubmit={this.useHandleSearch} name="search">
            <input
              onChange={this.useHandleSearchChange}
              type="text"
              class="input"
              name="txt"
              onMouseLeave={this.handleSearchBox}
            />
          </form>
          <i class="fa fa-search"></i>
        </div>
      </li>
    );
  }
}

export default function (props) {
  let navigate = useNavigate();
  return <Search {...props} navigate={navigate} />;
}
