const yelpApiKey=`${process.env.REACT_APP_API_KEY_YELP}`


const Fetches = {
  get: function(URI) {
    return fetch(URI);
  },
  post: function(URI, body) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    debugger
    return fetch(URI, config);
  },
  yelpGet: function(URI) {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": yelpApiKey,
      },
      // body: JSON.stringify(body)
    };

    return fetch(URI, config);
  },
  patch: function(URI, body) {
    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    return fetch(URI, config);
  },
  delete: function(URI) {
    const config = {
      method: "DELETE",
    };

    return fetch(URI, config);
  }
}

export default Fetches;
