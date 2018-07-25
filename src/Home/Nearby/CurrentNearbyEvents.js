import React from 'react'
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {displayNearbyEventsAction} from '../../actions';
import EventCard from './../../EventCard';


const url = `${process.env.REACT_APP_BACKEND_URL}api/v1/events/nearby?id=${localStorage.id}`

class CurrentUserEvents extends React.Component {


 displayNearbyEvents = (events) => {
   return events.map(event=>{
     return <EventCard
         key={event.id}
         {...event} />
   })
 }
  render () {
    return (
        <Card.Group id="UserEventCard">         {this.displayNearbyEvents(this.props.nearbyEvents)}
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
    saveNearbyEvents: (allEvents) => {
      dispatch(displayNearbyEventsAction(allEvents))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrentUserEvents);

// componentDidMount(){this.fetchNearbyEvents()}

// fetchNearbyEvents = () => {
//     fetch(url)
//     .then(response=>response.json())
//     .then(data=>{
//     this.props.saveNearbyEvents(data)
//     })
// }
