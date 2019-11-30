import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchOneGame } from "../store/detailpage/actions";

class DetailPage extends Component {
  static propTypes = {
    // name: PropTypes.string.isRequired
    // genre: PropTypes.string.isRequired,
    // publisher: PropTypes.string.isRequired,
    // hoursViewed: PropTypes.number.isRequired,
    // currentRank: PropTypes.number.isRequired,
    // previousRank: PropTypes.number.isRequired,
    // index: PropTypes.string
  };

  componentDidMount() {
    const { gameTitle } = this.props.match.params;
    this.props.fetchOneGame(gameTitle);
  }

  render() {
    const loading = !this.props.gameDetails;

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1>{this.props.gameDetails[0].name}</h1>
            <div>
              <img
                className="game-image"
                src={`https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${this.props.gameDetails[0].name}`}
                alt={`cover ${this.props.gameDetails.name}`}
              ></img>
              <div>
                <h3>Overal Stream Ranked</h3>
                <h3>{this.props.gameDetails[0].rank}</h3>
              </div>
              <div>
                <h3>Ranking per Streaming service</h3>
                <ul>
                  {this.props.gameDetails[0].rank_fields.map((field, index) => (
                    <li key={index}>
                      <span>
                        {field.name}: {field.rank}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Publishers</h3>
                <h3>
                  {this.props.gameDetails[0].publishers
                    .map(publisher => publisher.name)
                    .join(", ")
                    .replace(/, ([^,]*)$/, " & $1")}
                </h3>
              </div>
              <div>
                <h3>Genre(s)</h3>
                <h3>
                  {" "}
                  {this.props.gameDetails[0].genres
                    .map(genres => genres.name)
                    .join(", ")
                    .replace(/, ([^,]*)$/, " & $1")}
                </h3>
              </div>
              <div>
                <h3>About {this.props.gameDetails[0].name}</h3>
                <p>{this.props.gameDetails[0].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    games: reduxState.games,
    gameDetails: reduxState.gameDetails
  };
}

// const mapDispatchToProps = dispatch => ({
//   fetchOneGame: () => dispatch(fetchOneGame())
// });

export default connect(mapStateToProps, { fetchOneGame })(DetailPage);
