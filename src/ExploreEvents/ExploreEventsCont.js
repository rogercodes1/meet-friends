import React from 'react'
import ExploreEventsList from './ExploreEventsList';
// import GoogleMapEvents from 'google-map-react';
import EventsMap from './EventsMap';
import {connect} from 'react-redux';
import { render } from 'react-dom';
import GeoLocation from './GeoLocation';
import {displayNearbyEventsAction} from '../actions';


class ExploreEventsCont extends React.Component {


  componentDidMount(){
    this.fetchNearbyEvents()
  }

  fetchNearbyEvents = () => {
  const url = `http://localhost:3001/api/v1/events/nearby?id=${localStorage.id}`
      fetch(url)
      .then(response=>response.json())
      .then(data=>{
      this.props.saveAllEvents(data)
      })
  }

  render () {

    return(
      <div>
         <GeoLocation />

        <EventsMap/>
        <ExploreEventsList/>
      </div>
    )

  }
}
function mapStateToProps(state){
  return{
    nearbyEvents: state.nearbyEvents
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveAllEvents: (allEvents) => {
      dispatch(displayNearbyEventsAction(allEvents))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExploreEventsCont);
