import api from "../../api/newzoo";
import secrets from "../../secrets.js";

export function fetchOneGame(value) {
  return dispatch => {
    const endpoint = "metadata/game/search?";
    const data = {
      search_text: `${value}`
    };

    api(endpoint, { method: "post", data, jwt: secrets.jwt }).then(data => {
      dispatch(setGame(data));
    });
  };
}

export function setGame(data) {
  return {
    type: "game/FETCHED",
    payload: data
  };
}
