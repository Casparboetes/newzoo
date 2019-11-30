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
    const {
      game,
      genre,
      hoursViewed,
      currentRank,
      publisher,
      previousRank
    } = this.props;

    return (
      <li className="game">
        <Link to={`/games/${game}`}>
          <img
            className="game-image"
            src={`https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${game}`}
            alt={`cover ${game}`}
          ></img>
          <div className="center-left">{game}</div>
          <div className="lowest-bottom-left">{genre}</div>
          <div className="publisher">{publisher}</div>
          <div className="medium-bottom-left">{hoursViewed}</div>
          <div className="top-right" style={{ fontSize: "1.2rem" }}>
            {currentRank}
          </div>
          <div className="previousRank">{previousRank}</div>
        </Link>
      </li>
    );
  }
}
