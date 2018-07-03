import React, {Component} from 'react'
import PlaceCard from './PlaceCard';
import Search from './YelpSearch';
import EventForm from '../ExploreEvents/EventForm';
import {setResultsAction} from '../actions';
import {connect} from 'react-redux';
import Loading from '../Helpers/Loading';
// import Fetches from "../Fetches.js";
// import YelpResults from './reducer/yelp_reducer';
const backendURL = "http://localhost:3001/api/v1/places/yelp"

class ExplorePlacesCont extends Component {

componentDidMount(){
  this.yelpFetch()

}
yelpFetch = () => {
  fetch(backendURL)
  .then(response=>response.json())
  .then(yelp=>{
    // console.log("yelp fetch",yelp.results.businesses);
    this.props.setResults(yelp.results.businesses)
  })
}
renderYelpResults = () => {
  return this.props.results.map(place=>{
      return <PlaceCard
        className="PlaceCard"
        key={place.id}
        {...place}  />
          })
        }

  render () {
    return(
      <div id="ExplorePlacesCont">
        <Search />
        <EventForm />
        {(this.props.results === [] || this.props.results.length === 0 ) ? <Loading/> :
          <div className="ui four column grid">
            <div className="row">
              {this.renderYelpResults()}
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    results: state.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setResults: (yelpArray) => {
      dispatch(setResultsAction(yelpArray))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ExplorePlacesCont);

// const url = "https://api.yelp.com/v3/businesses/search?term=cookies&location=10004"
// const corsUrl="https://cors-anywhere.herokuapp.com/"
// const yelpApiKey=`${process.env.REACT_APP_API_KEY_YELP}`

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
