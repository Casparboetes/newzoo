import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGamesViewershipTop50 } from "../store/games/actions";
import GameCard from "./GameCard.js";
import "./GameTop50List.scss";

class GameTop50List extends Component {
  componentDidMount() {
    // dispatch "thunk" (function)
    this.props.dispatch(fetchGamesViewershipTop50);
  }

  handleClick = () => {
    let i =
      this.props.game.index < this.props.game.test.length
        ? (this.props.game.index += 1)
        : 0;
    this.setState({ index: i });
  };

  render() {
    const loading = !this.props.games;

    return (
      <div>
        <h1>Newzoo Top Streamed Games</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>
              We have top <span>{this.props.games.length}</span> streamed games!
            </p>
            <button onClick={this.handleClick}>Click</button>
            <ul>
              {this.props.games.map((game, index) => (
                <GameCard
                  game={game.game}
                  genre={game.genre}
                  publisher={game.publisher}
                  hoursViewed={game.hours_viewed}
                  currentRank={game.current_rank}
                  previousRank={game.previous_rank}
                  key={index}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ games: reduxState.games });

// function mapStateToProps(reduxState) {
//   console.log(reduxState);
//   return {
//     games: reduxState.games
//   };
// }
export default connect(mapStateToProps)(GameTop50List);
