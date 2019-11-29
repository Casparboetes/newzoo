import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOneGame } from "../store/detailpage/actions";

class DetailPage extends Component {
  componentDidMount() {
    const title = this.props.match.params.id;
    this.props.fetchOneGame(title);
  }

  render() {
    const loading = !this.props.games;
    const header = "Detailpage";

    return (
      <div>
        <h1>{header}</h1>
        {loading ? <p>Loading...</p> : <p>Loading DONE</p>}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log(reduxState);
  return {
    games: reduxState.games,
    game: reduxState.gameDetails
  };
}

// const mapDispatchToProps = dispatch => ({
//   fetchOneGame: () => dispatch(fetchOneGame())
// });

export default connect(mapStateToProps, { fetchOneGame })(DetailPage);
