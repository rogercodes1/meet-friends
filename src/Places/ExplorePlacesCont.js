import React from 'react'
// import PropTypes from 'prop-types'
const yelpApiKey=`${process.env.REACT_APP_API_KEY_YELP}`
const yelp = require('yelp-fusion');
const client = yelp.client(yelpApiKey);


class ExplorePlacesCont extends React.Component {



    // client.search({
    //   term:'Four Barrel Coffee',
    //   location: 'san francisco, ca'
    // }).then(response => {
    //   console.log(response.jsonBody.businesses[0].name);
    // }).catch(e => {
    //   console.log(e);
    // });

  render () {
    console.log("APi", yelpApiKey);
    console.log("other");
    return(
      <div>
        ExplorePlacesCont
        {yelpApiKey}

      </div>
    )

  }
}

export default ExplorePlacesCont;
