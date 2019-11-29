import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./GameCard.scss";

export default class GameCard extends Component {
  static propTypes = {
    game: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    hoursViewed: PropTypes.number.isRequired,
    currentRank: PropTypes.number.isRequired,
    previousRank: PropTypes.number.isRequired,
    index: PropTypes.string
  };

  render() {
    return (
      <li className="game">
        <Link to={`/games/${this.props.game}`}>
          <img
            className="game-image"
            src={`https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${this.props.game}`}
            alt={`cover ${this.props.game}`}
          ></img>
          <div className="center-left">{this.props.game}</div>
          <div className="lowest-bottom-left">{this.props.genre}</div>
          {/* <div className="publisher">{this.props.publisher}</div> */}
          <div className="medium-bottom-left">{this.props.hoursViewed}</div>
          <div className="top-right" style={{ fontSize: "1.2rem" }}>
            {this.props.currentRank}
          </div>
          {/* <div className="previousRank">{this.props.previousRank}</div> */}
        </Link>
      </li>
    );
  }
}
