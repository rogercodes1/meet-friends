import React, {Component} from 'react'
import Fetches from "../Fetches.js";
// import PropTypes from 'prop-types'
const yelpApiKey=`${process.env.REACT_APP_API_KEY_YELP}`
// const yelp = require('yelp-fusion');
// const client = yelp.client(yelpApiKey);
const url = "https://api.yelp.com/v3/businesses/search?term=smoothie&location=brooklyn, NY"

class ExplorePlacesCont extends Component {
            constructor(){
              super();
              this.state = {
                results:[]

              }
            }



// componentDidMount(){
//   this.yelpFetch()
  // client.search({
  //   term:'Four Barrel Coffee',
  //   location: 'san francisco, ca'
  // }).then(response => {
  //   debugger;
  //   console.log(response.jsonBody.businesses[0].name, "what is response");
  // }).catch(e => {
  //   console.log(e);
  // });
// }
// yelpFetch = () => {
//   // const config = {
//   //     method: "GET",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       "Authorization": "Bearer dLM0vm9GWYANzGhrAeJymWM1hNakfaiPwD8CaNL97QIUMaz0GnimYHCYzYy6RO4dMGk6mqU18glPTBsu33gny6GDQQMzCqO8o-o2zZwonT9rld_25fO9DGUOfEy6WnYx"
//   //     } }
//
//   // fetch("https://api.yelp.com/v3/businesses/search?term=smoothie&location=brooklyn, NY", config)
//   // .then(response=>response.json())
//   // .then(data=>console.log(data))
//
//
//   Fetches.yelpGet(url)
//   .then(response=>{debugger
//      response.json()})
//   .then(data=>console.log("what is the", data))
// }

  render () {


    return(
      <div>
        <h1>ExplorePlacesCont</h1>
        {"\n"+ yelpApiKey}

      </div>
    )

  }
}

export default ExplorePlacesCont;
