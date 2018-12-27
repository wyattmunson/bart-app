import React from "react";
import { Link } from "react-router-dom";

export default class Navheader extends React.Component {
  showActive = input => {
    let path = window.location.pathname;
    if (input === path) {
      return "nav-item nav-link active";
    } else {
      return "nav-item nav-link";
    }
  };

  render() {
    console.log(window.location.pathname);
    return (
      <nav className="navbar navbar-expand-lg navbar-light headerBgColor">
        <Link to="/" className="navbar-brand">
          \/\/\/\
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className={this.showActive("/")}>
              Home
            </Link>
            <Link to="/about" className={this.showActive("/about")}>
              About
            </Link>
            <Link to="/contact" className={this.showActive("/projects")}>
              Contact
            </Link>
            <Link to="/stationlist" className={this.showActive("/stationlist")}>
              Station List
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
