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
          <a
            className="logo"
            href="https://newzoo.com"
            title="Newzoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                "https://newzoo.com/wp-content/themes/newzoo/images/newzoo-logo.svg"
              }
              alt="Newzoo Logo"
            ></img>
          </a>
          <Link to={"/streaming"}> Home </Link>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = reduxState => ({ games: reduxState.games });

export default connect(null)(NavBar);
