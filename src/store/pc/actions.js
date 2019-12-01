import newzoo from "../../api/newzoo";
import secrets from "../../secrets.js";

export function fetchPcPlayerUsageTop50(dispatch, getState) {
  const endpoint =
    "pc_player_usage/game/comparison_data?fields=rank,rank_change,title,publisher,genre,player_share,sessions_per_user_per_day,average_playtime_per_day,average_session_time&start_date=2019-11-01&end_date=2019-11-30&comp_start_date=2019-10-01&comp_end_date=2019-10-31&geo_type=global&limit=50&__permission_set=Game%20Rankings";

  newzoo(endpoint, { method: "GET", jwt: secrets.jwt }).then(data => {
    dispatch(pcFetched(data));
  });
}

export function pcFetched(data) {
  return {
    type: "pc/FETCHED",
    payload: data
  };
}
