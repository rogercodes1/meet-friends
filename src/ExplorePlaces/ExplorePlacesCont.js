import React, {Component} from 'react'
// import Fetches from "../Fetches.js";
// import PropTypes from 'prop-types'
import PlaceCard from './PlaceCard';
import Search from '../Helpers/Search';

import Loading from '../Helpers/Loading';
const yelpApiKey=`${process.env.REACT_APP_API_KEY_YELP}`
const url = "https://api.yelp.com/v3/businesses/search?term=smoothie&location=brooklyn, NY"
const corsUrl="https://cors-anywhere.herokuapp.com/"
class ExplorePlacesCont extends Component {
            constructor(){
              super();
              this.state = {
                results:[]

              }
            }



componentDidMount(){
  this.yelpFetch()

}
yelpFetch = () => {
  const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": yelpApiKey}
    }
  fetch(corsUrl+url, config)
  .then(response=>response.json())
  .then(results=>{ this.setState({results : results.businesses}
,() => console.log("what is ",this.state.results) )
  })
}



  render () {
    // let places = this.state.results.map(place=>{
    //   return <PlaceCard
    //     key="place.id"
    //     id="place.id" place={place}/>
    // })
    console.log(this.state.results);
    // debugger;
    return(
      <div>
        <Search />

        {(this.state.results === [] || this.state.results.length === 0 ) ? <Loading/> :
          <div className="ui four column grid">
            <div className="row">
              {this.state.results.map(place=>{
                      return <PlaceCard
                        className="PlaceCard"
                          key={place.id}
                          {...place}

                          />
                  })}

            </div>
          </div> }


      </div>

    )

  }
}

export default ExplorePlacesCont;

// const yelp = require('yelp-fusion');
// const client = yelp.client(yelpApiKey);

// Fetches.yelpGet(corsUrl+url)
// .then(response=>{debugger
//    response.json()})
// .then(data=>console.log("what is the", data))

// client.search({
//   term:'Four Barrel Coffee',
//   location: 'san francisco, ca'
// }).then(response => {
//   debugger;
//   console.log(response.jsonBody.businesses[0].name, "what is response");
// }).catch(e => {
//   console.log(e);
// });
