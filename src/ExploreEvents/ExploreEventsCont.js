import React from 'react'
import ExploreEventsList from './ExploreEventsList';
// import GoogleMapEvents from 'google-map-react';
import EventsMap from './EventsMap';
import {connect} from 'react-redux';
import {displayNearbyEventsAction} from '../actions';
const url = `http://localhost:3001/api/v1/events/nearby?id=${localStorage.id}`

class ExploreEventsCont extends React.Component {


  componentDidMount(){
    this.fetchNearbyEvents()
  }

  fetchNearbyEvents = () => {
      fetch(url)
      .then(response=>response.json())
      .then(data=>{
      this.props.saveAllEvents(data)
      })
  }

  render () {

    return(
      <div>
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
