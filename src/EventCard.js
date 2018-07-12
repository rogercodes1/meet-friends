import React,{Component} from 'react'
import {Card,Button, Header,Image, Icon, Modal} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {selectPlaceAction, displayNearbyEventsAction, displayFormAction, saveUserEventsAction} from './actions';
import {CardDetails} from './Helpers/HelpEventCard';
import Fetches from './Fetches';
let url ="http://localhost:3001/api/v1/events/join_event"


class EventCard extends Component{
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

handleClick = (e) => {
    const data = {
      event_id: this.props.id,
      user_id: parseInt(localStorage.id, 10)
    }
    Fetches.post(url,data)
    .then(res=>res.json())
    .then(json=>{
      if (json.status === "accepted"){
        this.setState({open: false})
        this.props.saveNearbyEvents(json.nearby)
        this.props.addEvent(json.data)
        alert("Event has been added.\n Check your homepage to see your current events.")
      }
      else {
        alert("Unable to join event at the moment. Try again later.")
      }
    })
  }
  render() {
    const { open, dimmer } = this.state
    const props = this.props
    const list = (this.props.list === "ExploreCard") ? ("ExploreCard") : "noCSS"
    return (
        <Card key={props.id} id={list.toString()}>
          {CardDetails(
            props.yelp_image,
            props.event_name,
            props.location_name,
            props.description)}
          <Card.Content extra>
            <Card.Description >
              Duration: {props.duration} hour <br/>
              When: {props.time} {props.date}
            </Card.Description>
              <Card.Meta>{props.address} </Card.Meta>
          <div className='ui three buttons'>
            <Button href={props.yelp_url} target="_blank" basic color='red'>
              Yelp
            </Button>

            <Modal
              trigger={<Button onClick={this.show('blurring')} basic color="blue">Event Details</Button>} dimmer={dimmer} open={open} onClose={this.close}>
                <Modal.Header>{props.event_name}</Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src={props.yelp_image} />
                  <Modal.Description>
                    <Header>@ {props.location_name}</Header>
                    <Header>{props.address}</Header>
                    <p>{props.description}</p>
                    <p>Time: {props.time} <br/>
                    Duration:{props.duration} hour <br/>
                  When:{props.date}</p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>

                 <Button color='green' onClick={this.handleClick.bind(this)} inverted>
                   <Icon name='checkmark' /> Join
                 </Button>
               </Modal.Actions>
              </Modal>

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
    },
    addEvent: (event) => {
      dispatch(saveUserEventsAction(event))
    },
    saveNearbyEvents: (allEvents) => {
      dispatch(displayNearbyEventsAction(allEvents))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventCard)
