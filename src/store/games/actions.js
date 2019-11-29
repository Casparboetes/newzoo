import newzoo from "../../api/newzoo";
import secrets from "../../secrets.js";

export function fetchGamesViewershipTop50(dispatch, getState) {
  const endpoint =
    "https://api.newzoo.com/v1.0/viewership/table_rankings?start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&platforms=YouTube,Twitch&limit=1000&__permission_set=Game%20Rankings";

  newzoo(endpoint, { method: "GET", jwt: secrets.jwt }).then(data => {
    dispatch(gamesFetched(data));
  });
}

export function gamesFetched(data) {
  return {
    type: "games/FETCHED",
    payload: data
  };
}
