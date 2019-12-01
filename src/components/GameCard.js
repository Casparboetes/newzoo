import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./GameCard.scss";

export default class GameCard extends Component {
  static propTypes = {
    game: PropTypes.string.isRequired,
    currentRank: PropTypes.number.isRequired,
    index: PropTypes.string
  };

  render() {
    const { game, currentRank } = this.props;

    return (
      <li className="game">
        <Link to={`/games/${game}`}>
          <img
            className="game-image"
            src={`https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${game}`}
            alt={`cover ${game}`}
          ></img>
          <div className="top-right" style={{ fontSize: "1.2rem" }}>
            {currentRank}
          </div>
        </Link>
      </li>
    );
  }
}
