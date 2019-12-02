// src/store/reducer.js
import { combineReducers } from "redux";
import gamesReducer from "./games/reducer";
import pcReducer from "./pc/reducer";
import detailPageReducer from "./detail-page/reducer";

export default combineReducers({
  games: gamesReducer,
  pcGames: pcReducer,
  gameDetails: detailPageReducer
});
