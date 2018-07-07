import React,{Component} from 'react'
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {saveUserEventsAction} from '../actions';
import {displayMessageEvents} from '../Helpers/EventCard';

const url = `http://localhost:3001/api/v1/users/${localStorage.id}/`

class MessageList extends Component{

  componentDidMount(){this.fetchUserEvents()}

  fetchUserEvents = () => {
      fetch(url)
      .then(response=>response.json())
      .then(userData=>{
      this.props.saveUserEvents(userData.events)
      })
  }
  handleClick = (e) => {
    console.log(e.target);
    console.log(this.props.userEvents);
    console.log("We clicked the event");
  }


render(){
  return (
    <div id="MessageList">
      <Card.Group id="CardMessage">
       {/*display userEvents is in Helpers/EventCard*/}
      {displayMessageEvents(this.props.userEvents, this.handleClick)}
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

export default connect(mapStateToProps,mapDispatchToProps)(MessageList)
