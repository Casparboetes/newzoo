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
    .then(function(response) {
      const { data } = response;
      return data;
    })
    .catch(function(error) {
      return console.log("oopsie, error");
    });
};

// function api(endpoint, { method, body, jwt } = {}) {
//   return fetch("https://api.newzoo.com/v1.0/" + endpoint, {
//     method: method,
//     headers: {
//       Authorization: `Bearer ${jwt}`
//     },
//     body: JSON.stringify(body)
//   })
//     .then(response => Promise.all([response.status, response.json()]))
//     .then(([status, data]) => {
//       if (status >= 400) {
//         // throw { api_error: data };
//         console.log("Oopsie, error");
//       } else {
//         console.log("data in call itself", data);
//         return data;
//       }
//     });
// }

export default api;
