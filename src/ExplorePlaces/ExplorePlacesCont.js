import React, {Component} from 'react'
import PlaceCard from './PlaceCard';
import Search from './YelpSearch';
import EventForm from './EventForm';
import {setYelpResultsAction, displayFormAction} from '../actions';
import { Card } from 'semantic-ui-react'
import {connect} from 'react-redux';
import Loading from '../Helpers/Loading';
import Fetches from './../Fetches.js';
const URL = `${process.env.REACT_APP_BACKEND_URL}places?`

class ExplorePlacesCont extends Component {
  // TODO: figure out if I need the state below or if it is being picked up from redux store.
  state = {
    searchTerm:"bars",
    location: "New York, NY",
    radius: 2000,
    limit: 20,
  }

componentDidMount(){
  this.yelpFetch()
}
yelpFetch = () => {
  const params = this.props.yelpSubmit
  Fetches.yelpGet(URL, params)
  .then(response=>response.json())
  .then(yelp=>{
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
        {(this.props.boolean) ?
            <EventForm {...this.props}/> : null
        }
        {(this.props.results === [] || this.props.results.length === 0 ) ? <Loading/> :
          <div className="ui four column grid">
            <div className="row">
              <Card.Group centered>
              {this.renderYelpResults()}
              </Card.Group>
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    results: state.results,
    displayForm: state.boolean,
    boolean: state.boolean,
    yelpSubmit: state.yelpParams,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setResults: (yelpArray) => {
      dispatch(setYelpResultsAction(yelpArray))
    },
    displayForm: () => {
      dispatch(displayFormAction())
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ExplorePlacesCont);
