import React,{Component} from 'react'
import {Card,Image} from 'semantic-ui-react'
// import Fetches from './Fetches';
import {connect} from 'react-redux';
import {saveUserEventsAction} from '../actions';
// let url ="http://localhost:3001/api/v1/events/join_event"
class MessageEventCard extends Component {

  handleClick = (e) => {
    console.log(e.target);
    console.log(this.props.userEvents);
    console.log("We clicked the event");
  }

  render(){
    const props = this.props
    return(
      <Card key={props.id} id={props.id} onClick={this.handleClick}>
        <Card.Content id="CardMessage">
        <Image floated="left" size="tiny" src={props.yelp_image}/>
          <Card.Header>{props.event_name}</Card.Header>
       <Card.Meta>{props.location_name}</Card.Meta>
       <Card.Description>Time: {props.time} Date:{props.date}</Card.Description>
       <Card.Meta>{props.address} </Card.Meta>
      </Card.Content>
      </Card>
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

export default connect(mapStateToProps,mapDispatchToProps)(MessageEventCard)
