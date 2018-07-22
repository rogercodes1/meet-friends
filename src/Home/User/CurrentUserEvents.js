import React,{Component} from 'react'
import {Card} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {saveUserEventsAction} from '../../actions';
import {displayUserEvents} from '../../Helpers/HelpEventCard';
import Onboarding from './../../Helpers/Onboarding';

class CurrentUserEvents extends Component {

  render () {
// TODO: improve Onboarding
    return (
      <Card.Group id="UserEventCard">
       {(this.props.userEvents.length > 0)
         ? displayUserEvents(this.props.userEvents)
         : <React.Fragment> <Onboarding /></React.Fragment>
         }
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

// componentDidMount(){this.fetchCurrentUserEvents()}

// fetchCurrentUserEvents = () => {
//   const url = `http://localhost:3001/api/v1/users/${localStorage.id}/`
//     fetch(url)
//     .then(response=>response.json())
//     .then(userData=>{
//     this.props.saveUserEvents(userData.events)
//     })
// }
