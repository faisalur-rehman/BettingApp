import React from "react";
import "./Header.css";
import logo from "../../../assets/img/logo.png";
import {Link} from  "react-router-dom";

const HeaderBottom = () => {
  // window.onscroll = function () {
  //   myFunction();
  // };
  
  // var header = document.getElementById('navbar');
  // var sticky = header.offsetTop;
  
  // const myFunction = () => {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // };
  return (
    <div id="navbar" className="header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-block align-items-center">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-6 d-xl-block d-lg-block d-flex align-items-center">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-6 d-xl-none d-lg-none d-block">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <div className="mainmenu">
              <nav className="navbar navbar-expand-lg">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/my_bets">
                        My Bets
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/accumulator">
                        Accumulator
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/special">
                        Specials
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="football">
                        Football
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="login">
                        Sign In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="register">
                        Register{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
