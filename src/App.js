import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GameTop50List from "./components/GameTop50List";
import GamePCList from "./components/GamePCList";
import NavBar from "./components/NavBar";
import DetailPage from "./components/DetailPage";

import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/streaming" component={GameTop50List} />
          <Route path="/streaming/:id" component={DetailPage} />
          <Route path="/pc-games" component={GamePCList} />
          <Route path="/pc-games/:id" component={DetailPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}
