import axios from "axios";

function getData() {
  axios
    .get(
      "https://api.newzoo.com/v1.0/viewership/table_rankings?start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&platforms=YouTube,Twitch&limit=1000&__permission_set=Game%20Rankings",
      {
        headers: {
          Authorization: `Bearer n287F2zeD3a7uGqr-dZ2fjYbdQy6iIAx0cRLCZQAKl8`
        }
      }
    )
    .then(res => {
      console.log("RESULT", res);
      console.log("DATA", res.data);
      // .catch((error) => {
      //   console.log(error)
      // });
    });
}

export default getData;
