import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
        </div>
      </nav>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    games: reduxState.games,
    gameDetails: reduxState.gameDetails
  };
}

export default connect(mapStateToProps)(NavBar);
