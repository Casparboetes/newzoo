import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOneGame } from "../../store/detail-page/actions";
import "./DetailPage.scss";

class DetailPage extends Component {
  componentDidMount() {
    const { gameTitle } = this.props.match.params;
    this.props.fetchOneGame(gameTitle);
  }

  render() {
    const loading = !this.props.gameDetails;

    return (
      <div className="detail-page border">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="container">
              <h1 className="game-title">{this.props.gameDetails[0].name}</h1>
              <div className="game-rankings">
                <ul>
                  {this.props.gameDetails[0].rank_fields.map((field, index) => (
                    <li key={index}>
                      <span>
                        {field.name}: Rank {field.rank}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="game-overview">
              <img
                className="game-image border"
                src={`https://api-test.newzoo.com:443/v1.0/metadata/game/boxart?name=${this.props.gameDetails[0].name}`}
                alt={`cover ${this.props.gameDetails.name}`}
              ></img>
              <div className="game-data ">
                <div>
                  <h4>Overal Stream Ranked</h4>
                  <div>{this.props.gameDetails[0].rank}</div>
                </div>
                <div>
                  <h4>Publishers</h4>
                  <div>
                    {this.props.gameDetails[0].publishers
                      .map(publisher => publisher.name)
                      .join(", ")
                      .replace(/, ([^,]*)$/, " & $1")}
                  </div>
                </div>
                <div>
                  <h4>Genre(s)</h4>
                  <div>
                    {this.props.gameDetails[0].genres
                      .map(genres => genres.name)
                      .join(", ")
                      .replace(/, ([^,]*)$/, " & $1")}
                  </div>
                </div>
              </div>
            </div>
            <div className="read-more">
              <h4>About {this.props.gameDetails[0].name}</h4>
              <p>{this.props.gameDetails[0].description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  games: reduxState.games,
  gameDetails: reduxState.gameDetails
});

export default connect(mapStateToProps, { fetchOneGame })(DetailPage);
