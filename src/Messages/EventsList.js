import React,{Component} from 'react'
import {Card} from 'semantic-ui-react';
// import {connect} from 'react-redux';
import {saveUserEventsAction, selectedChatEventAction} from '../../actions';
import EventListCard from './EventListCard';

const url = `http://localhost:3001/api/v1/users/${localStorage.id}/`

class EventsList extends Component{

  componentDidMount(){this.fetchUserEvents()}



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
    },
    selectedChatEvent: (event) => {
      dispatch(selectedChatEventAction(event))
    }
  }

}

export default (EventsList)
// connect(mapStateToProps,mapDispatchToProps)
