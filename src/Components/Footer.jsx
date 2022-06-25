import React from "react";
import SocialMediaIcons from "./Commons/socialMediaIcons";
import "../Style/footerStyle.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <hr id="linea-footer" />
        <div className="container-fluid">
          <div className="row">
            <div className="column1 col-md-12 col-lg-4">
              <p className="titlesFooter">Cinema Aprile</p>
              <p>
                <Link className="linksFooter" to="/">
                  {" "}
                  Chi Siamo{" "}
                </Link>
              </p>
              <p>
                <Link className="linksFooter" to="/">
                  {" "}
                  Lavora con noi{" "}
                </Link>
              </p>
            </div>

            <div className="column2 col-md-12 col-lg-4">
              <p className="titlesFooter">Contatti</p>
              <p>
                <i className="fa fa-map-marker-alt"></i>
                Via Carlo Alberto, Roma | Torino | Napoli, Italia
              </p>

              <p>
                <i className="far fa-clock"></i>
                Lunedi - Venerdi | 9:00 - 20:00
              </p>

              <p>
                <i className="fa fa-phone-alt"></i>
                +38806473892640
              </p>

              <p>
                <i className="fa fa-envelope"></i>
                info@cinemagrande.com
              </p>
            </div>

            <div className="column3 col-md-12 col-lg-4 row">
              <div className="socialMediaIcons col-12">
                <SocialMediaIcons />
              </div>

              <div className="copyrights col-12">
                <br />
                <br />
                &#169; Copy Rights 2022 | Cinema Aprile
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
