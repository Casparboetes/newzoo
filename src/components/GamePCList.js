import React from "react";
import { connect } from "react-redux";
// import { fetchGamesViewershipTop50 } from "../store/games/actions";
import GameCard from "./GameCard.js";
import "./GameTop50List.scss";

// The "unconnected" inner component:
class GamePCList extends React.Component {
  componentDidMount() {
    // dispatch the "thunk" (function) itself
    // this.props.dispatch(fetchGamesViewershipTop50);
  }

  render() {
    const loading = !this.props.games;

    return (
      <div>
        <h1>Newzoo Top PC Games</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>
              We have top <span>{this.props.games.length}</span> streamed games!
            </p>
            <div className="card-holder">
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
          </div>
        )}
      </div>
    );
  }
}

// const mapStateToProps = reduxState => ({ games: reduxState.games });

// function mapStateToProps(reduxState) {
//   console.log(reduxState);
//   return {
//     games: reduxState.games
//   };
// }
export default connect(null)(GamePCList);
