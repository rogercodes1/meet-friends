import React,{Component} from 'react'
import {Card,Button} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {selectPlaceAction, displayFormAction} from '../actions';
import {CardDetails} from '../Helpers/EventCard';
let url ="http://localhost:3001/api/v1/events"


class HomeEventCard extends Component{

showEventDetails = (e) => {
  const eventUrl=`${url}/${this.props.id}`
    debugger;
  }
  render() {
    const props = this.props
    return (
        <Card key={props.id}>
          {CardDetails(
            props.yelp_image,
            props.event_name,
            props.location,
            props.description)}
          <Card.Content extra>
            <Card.Description floated="left">
              Time: {props.time} Duration:{props.duration} <br/> Date:{props.date}</Card.Description>
              <Card.Meta>{props.address} </Card.Meta>
          <div className='ui three buttons'>
            <Button href={props.yelp_url} target="_blank" basic color='red'>
              Yelp
            </Button>
            <Button basic onClick={this.showEventDetails.bind(this)} color='blue'>
              Event Details
            </Button>
            <Button  href={props.maps_link} target="_blank" basic color='red'>
              Google Maps
            </Button>
        </div>
        </Card.Content>
        </Card>
    );
  }
}

function mapStateToProps(state){
  return{
    selectEvent: state.selectEvent,
    displayForm: state.boolean,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    selectEvent: (selectedBusiness) => {
      dispatch(selectPlaceAction(selectedBusiness))
    },
    displayForm: (toggleDisplay) => {
      dispatch(displayFormAction(toggleDisplay))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeEventCard)
