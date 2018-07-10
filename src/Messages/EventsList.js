import React,{Component} from 'react'
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {saveUserEventsAction} from '../actions';
import MessageEventCard from './MessageEventCard';

const url = `http://localhost:3001/api/v1/users/${localStorage.id}/`

class EventsList extends Component{

  componentDidMount(){this.fetchUserEvents()}

  fetchUserEvents = () => {
      fetch(url)
      .then(response=>response.json())
      .then(userData=>{
      this.props.saveUserEvents(userData.events)
      })
  }
  displayMessageEvents = (messageEvents) => {
    return messageEvents.map(event=>{
      return <MessageEventCard
          key={event.id}
          {...event} />
    })
  }

render(){
  return (
    <div id="MessageList">
      <Card.Group id="CardMessage">
       {/*display userEvents is in Helpers/EventCard*/}
      {this.displayMessageEvents(this.props.userEvents)}
      </Card.Group>
    </div>
  )
}
}
function mapStateToProps(state){
  return{
    userEvents: state.userEvents
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveUserEvents: (userEvents) => {
      dispatch(saveUserEventsAction(userEvents))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(EventsList)
