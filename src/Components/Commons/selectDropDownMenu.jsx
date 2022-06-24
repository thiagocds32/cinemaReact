import React, { Component } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "../../Style/selectDropDownMenuStyle.css";

class SelectDropDown extends Component {
  hideScegli = () => {
    document.getElementById("optionScegli").style.display = "none";
  };
  render() {
    const { selectTitle, selectContent, onMovieChange, navigator, params } =
      this.props;
    return (
      <React.Fragment>
        <div className="selectDropdownContainer">
          <div className="selectDropdown" tabIndex="1">
            <input
              className="selectopt"
              type="radio"
              name="test"
              id="optsclegi"
              checked={params.id === undefined ? true : false}
            />
            <label
              htmlFor="optscegli"
              className="option"
              hidden={params.id === undefined ? false : true}
            >
              Scegli il Film
            </label>
            {selectContent.map((content) => (
              <React.Fragment key={content._id}>
                <input
                  onClick={() => navigator(`/prenotaOra/${content._id}`)}
                  className="selectopt"
                  type="radio"
                  name="test"
                  id={"opt" + content._id}
                  checked={params.id === content._id ? true : false}
                />
                <label htmlFor={"opt" + content._id} className="option">
                  {content.title}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default function (props) {
  let navigator = useNavigate();
  let params = useParams();
  return <SelectDropDown {...props} navigator={navigator} params={params} />;
}
