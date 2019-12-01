import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPcPlayerUsageTop50 } from "../store/pc/actions";
import GameCard from "./GameCard.js";
import "./List.scss";

class GameTop50List extends Component {
  componentDidMount() {
    if (this.props.pcGames === null) {
      this.props.dispatch(fetchPcPlayerUsageTop50);
    }
  }

  render() {
    const loading = !this.props.pcGames;

    return (
      <div className="game-list">
        <h1>Newzoo Top PC Games</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>
              Our top <span>{this.props.pcGames.length}</span> pc games!
            </p>

            <ul>
              {this.props.pcGames
                .map((pcGame, index) => (
                  <GameCard
                    game={pcGame.title}
                    currentRank={pcGame.rank}
                    key={index}
                  />
                ))
                .slice(0, 7)}
            </ul>

            <button
              className="button"
              onClick={() => this.props.dispatch({ type: "pc/ROTATE_RIGHT" })}
            >
              &#10094; &#10094;
            </button>

            <button
              className="button"
              onClick={() => this.props.dispatch({ type: "pc/ROTATE_LEFT" })}
            >
              &#10095; &#10095;
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ pcGames: reduxState.pcGames });

export default connect(mapStateToProps)(GameTop50List);
