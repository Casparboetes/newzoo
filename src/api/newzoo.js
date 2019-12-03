import axios from "axios";

const api = (endpoint, { method, data, jwt } = {}) => {
  return axios({
    method: method,
    url: "https://api.newzoo.com/v1.0/" + endpoint,
    data,
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  })
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => {
      return console.log("Oopsie, an error: ", error);
    });
};

export default api;
