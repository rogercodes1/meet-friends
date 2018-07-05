

const Fetches = {
  get: function(URL) {
    return fetch(URL);
  },
  post: function(URL, body) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    return fetch(URL, config);
  },
  yelpGet: function(URL, params) {
    const fullURL = `${URL}term=${params.searchTerm}&location=${params.location}&radius=${params.radius}&limit=${params.limit}`
    return fetch(fullURL);
  },
  patch: function(URL, body) {
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    return fetch(URL, config);
  },
  delete: function(URL) {
    const config = {
      method: "DELETE",
    };

    return fetch(URL, config);
  }
}

export default Fetches;
