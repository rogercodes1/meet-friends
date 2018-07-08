import React,{Component} from 'react'
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {saveUserEventsAction} from '../actions';
import {displayUserEvents} from '../Helpers/HelpEventCard';


const url = `http://localhost:3001/api/v1/users/${localStorage.id}/`

class CurrentUserEvents extends Component {

componentDidMount(){this.fetchCurrentUserEvents()}

fetchCurrentUserEvents = () => {
    fetch(url)
    .then(response=>response.json())
    .then(userData=>{
    this.props.saveUserEvents(userData.events)
    })
}

  render () {
    return (
       <Card.Group id="UserEventCard">
       {displayUserEvents(this.props.userEvents)}
       </Card.Group>
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

export default connect(mapStateToProps,mapDispatchToProps)(CurrentUserEvents);
