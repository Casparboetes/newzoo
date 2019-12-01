import React, { Component } from "react";
import { Link } from "react-router-dom";
import pc from "../assets/pc.png";
import stream from "../assets/stream.png";

import "./LandingPage.scss";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="profile-gate-label">What are you after?</div>
        <ul className="choose-interest">
          <li>
            <Link className="nav-link" to={"/pc-games"}>
              <img className="profile-image pc" src={pc} alt="PC-logo"></img>
            </Link>
            <div className="interest ">Games</div>
          </li>
          <li>
            <Link className="nav-link" to={"/streaming"}>
              <img
                className="profile-image streaming"
                src={stream}
                alt="Stream-logo"
              ></img>
            </Link>
            <div className="interest">Streaming</div>
          </li>
        </ul>
      </div>
    );
  }
}
export default LandingPage;
