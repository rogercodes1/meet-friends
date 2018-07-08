import React from 'react'
import { Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {displayNearbyEventsAction} from '../actions';
import EventCard from './../EventCard';

const url = `http://localhost:3001/api/v1/events/nearby?id=${localStorage.id}`

class ExploreEventsList extends React.Component {

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

displayNearbyEvents = (events) => {
  let list ="ExploreCard"
  return events.map(event=>{
    return <EventCard
        key={event.id}
        {...event} list={list}/>
  })
}

  render () {
    return (
      <div className="ui two column grid">
        <div className="row">
       <Card.Group  id="ExploreNearbyList">
         {this.displayNearbyEvents(this.props.nearbyEvents)}
       </Card.Group>
     </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(ExploreEventsList);
