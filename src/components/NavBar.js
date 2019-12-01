import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
import "./NavBar.scss";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="container">
          <Link to={"/"} className="logo">
            <img
              src={
                "https://newzoo.com/wp-content/themes/newzoo/images/newzoo-logo.svg"
              }
              alt="Newzoo Logo"
            ></img>
          </Link>
          <Link to={"/streaming"}> Streaming </Link>
          <Link to={"/streaming"}> Streaming </Link>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = reduxState => ({ games: reduxState.games });

export default connect(null)(NavBar);
