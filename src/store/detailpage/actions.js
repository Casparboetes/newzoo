import newzoo from "../../api/newzoo";
import secrets from "../../secrets.js";
import axios from "axios";

// export function fetchOneGame(value) {
//   return function(dispatch, getState) {
//     const endpoint = "metadata/game/search?";
//     const body = {
//       search_text: `${value}`
//     };

//     newzoo(endpoint, {
//       method: "POST",
//       body,
//       jwt: secrets.jwt
//     }).then(data => {
//       dispatch(setGame(data));
//     });
//   };
// }

export function setGame(data) {
  return {
    type: "game/FETCHED",
    payload: data
  };
}

export function fetchOneGame(value) {
  return dispatch => {
    const endpoint = "metadata/game/search?";
    const data = {
      search_text: `${value}`
    };
    axios({
      method: "post",
      url: "https://api.newzoo.com/v1.0/" + endpoint,
      data,
      headers: {
        Authorization: `Bearer ${secrets.jwt}`
      }
    })
      .then(function(response) {
        const { data } = response;
        dispatch(setGame(data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
