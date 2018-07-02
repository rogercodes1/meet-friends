import React, {Component} from 'react'
import Fetches from "../Fetches.js";
import PlaceCard from './PlaceCard';
import Search from './YelpSearch';
import {connect} from 'react-redux';
// import YelpResults from './reducer/yelp_reducer';
import Loading from '../Helpers/Loading';
const backendURL = "http://localhost:3001/api/v1/places/yelp"
// const url = "https://api.yelp.com/v3/businesses/search?term=cookies&location=10004"
// const corsUrl="https://cors-anywhere.herokuapp.com/"
// const yelpApiKey=`${process.env.REACT_APP_API_KEY_YELP}`
class ExplorePlacesCont extends Component {
            constructor(){
              super();
              // this.state = {
              //   results:[]
              //
              // }
            }



componentDidMount(){
  this.yelpFetch()

}
yelpFetch = () => {

  fetch(backendURL)
  .then(response=>response.json())
  .then(yelp=>{
    console.log(yelp.results.businesses);
    this.props.setResults(yelp.results.businesses)

  })

}

  render () {
    // let places = this.state.results.map(place=>{
    //   return <PlaceCard
    //     key="place.id"
    //     id="place.id" place={place}/>
    // })
    console.log("what is", this.props.results);

    return(
      <div>
        <Search />

        {(this.props.results.results === [] || this.props.results.results.length === 0 ) ? <Loading/> :
          <div className="ui four column grid">
            <div className="row">
              {this.props.results.results.map(place=>{
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
function mapStateToProps(state){
  return{
    results: state

  }
}
function mapDispatchToProps(dispatch) {
  return {
    setResults: (results) => dispatch({
      type: "YELP_RESULTS",
      payload: results
    })
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ExplorePlacesCont);



// const config = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": yelpApiKey}
//   }
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
