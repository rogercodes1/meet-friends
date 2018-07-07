import React from 'react'
import {Button, Card, Image, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {displayNearbyEventsAction} from '../actions';
const url = `http://localhost:3001/api/v1/events/nearby?id=${localStorage.id}`

class CurrentUserEvents extends React.Component {

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
  return events.map(event=>{
    return(
      <Card key={event.id} fluid>
        <Card.Content>
          <Card.Header>{event.event_name}</Card.Header>
          <Card.Meta>{event.location_name} {}</Card.Meta>
            <Image floated="left" size="small" src={event.yelp_image}/>
      <a href={event.maps_link}> <Card.Meta>{event.address} </Card.Meta></a>
       <Card.Description>
        {event.description}
       </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='three buttons'>
          <Button basic color='green'>
            Join Event
          </Button>
          <Button href={event.yelp_url} target="_blank" color='red'>
            <Icon name="yelp"/>
            Yelp
          </Button>
          <Button href={event.maps_link} target="_blank" basic color='red'>
            Google Maps
          </Button>
        </div>
      </Card.Content>
      </Card>
    )
  })
}

  render () {
    console.log("this. nearby", this.props.nearbyEvents);
    return (

           <Card.Group id="NearbyEventsCard">
             {this.displayNearbyEvents(this.props.nearbyEvents)}

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
