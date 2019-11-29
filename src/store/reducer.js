// src/store/reducer.js
import { combineReducers } from "redux";
import gamesReducer from "./games/reducer";
import detailPageReducer from "./detailpage/reducer";

export default combineReducers({
  games: gamesReducer,
  gameDetails: detailPageReducer
  // we can add more "slice" subreducers here later on...
});
