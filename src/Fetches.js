const yelpApiKey=`${process.env.REACT_APP_API_KEY_YELP}`


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
    debugger
    return fetch(URL, config);
  },
  yelpGet: function(URL) {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": yelpApiKey,
      },
      // body: JSON.stringify(body)
    };

    return fetch(URL, config);
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
