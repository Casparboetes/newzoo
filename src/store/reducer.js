// src/store/reducer.js
import { combineReducers } from "redux";
import gamesReducer from "./games/reducer";

export default combineReducers({
  games: gamesReducer
  // we can add more "slice" subreducers here later on...
});
