import React from 'react'
import {Card} from 'semantic-ui-react';
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
       <Card.Group>
         {/*display events is in Helpers/EventCard*/}
         {displayNearbyEvents(this.props.nearbyEvents)}
       </Card.Group>
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

export default connect(mapStateToProps,mapDispatchToProps)(CurrentUserEvents);
