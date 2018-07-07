import React from 'react'
import {Button, Card, Image} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {displayNearbyEventsAction} from '../actions';
import {displayNearbyEvents} from '../Helpers/EventCard';

const url = `http://localhost:3001/api/v1/events/nearby?id=${localStorage.id}`

class CurrentUserEvents extends React.Component {

componentDidMount(){this.fetchNearbyEvents()}

fetchNearbyEvents = () => {
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
    this.props.saveAllEvents(data)
    })
}

  render () {

    return (
       <Card.Group id="NearbyEventsCard">
         {displayNearbyEvents(this.props.nearbyEvents)}
       </Card.Group>
    )
  }
}

function mapStateToProps(state){
  console.log("what is state map props nearby",state.nearbyEvents);
  return{
    nearbyEvents: state.nearbyEvents
  }
}

function mapDispatchToProps(dispatch) {
  console.log("what is dispatch",dispatch);
  return {
    saveAllEvents: (allEvents) => {
      dispatch(displayNearbyEventsAction(allEvents))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrentUserEvents);
