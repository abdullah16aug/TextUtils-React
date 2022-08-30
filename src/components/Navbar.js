import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className=" nav-link active" href="#">
                Home{" "}
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li> */}
          </ul>

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
            onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Enter Title",
  aboutText: "Enter About",
};
