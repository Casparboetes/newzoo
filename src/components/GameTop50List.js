import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGamesViewershipTop50 } from "../store/games/actions";
import GameCard from "./GameCard.js";
import "./GameTop50List.scss";

class GameTop50List extends Component {
  componentDidMount() {
    if (this.props.games === null) {
      this.props.dispatch(fetchGamesViewershipTop50);
    }
  }

  render() {
    const loading = !this.props.games;

    return (
      <div className="game-list">
        <h1>Newzoo Top Streamed Games</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>
              We have top <span>{this.props.games.length}</span> streamed games!
            </p>
            <ul>
              {this.props.games
                .map((game, index) => (
                  <GameCard
                    game={game.game}
                    hoursViewed={game.hours_viewed}
                    currentRank={game.current_rank}
                    key={index}
                  />
                ))
                .slice(0, 50)}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ games: reduxState.games });

export default connect(mapStateToProps)(GameTop50List);
