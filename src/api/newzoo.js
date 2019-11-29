function api(endpoint, { method, body, jwt } = {}) {
  return fetch(endpoint, {
    method: method,
    headers: {
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify(body)
  })
    .then(response => Promise.all([response.status, response.json()]))
    .then(([status, data]) => {
      if (status >= 400) {
        // throw { api_error: data };
        console.log("Oopsie, error");
      } else {
        return data.data;
      }
    });
}

export default api;
