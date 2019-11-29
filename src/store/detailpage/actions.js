import newzoo from "../../api/newzoo";
import secrets from "../../secrets.js";

export function fetchOneGame(value) {
  return function(dispatch, getState) {
    const endpoint = "metadata/game/search?";
    const body = {
      search_text: `${value}`
    };

    newzoo(endpoint, {
      method: "POST",
      body,
      jwt: secrets.jwt
    }).then(data => {
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
