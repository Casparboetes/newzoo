import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { LandingPage, StreamedGames, PcGames, DetailPage } from "./views";

import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/streaming" component={StreamedGames} />
          <Route path="/pc-games" component={PcGames} />
          <Route path="/games/:gameTitle" component={DetailPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}
