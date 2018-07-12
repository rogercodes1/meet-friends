import React,{Component} from 'react'
import { Button,Header,Image, Icon, Modal} from 'semantic-ui-react'
import Fetches from './../Fetches';

let url ="http://localhost:3001/api/v1/events/join_event"

class EventMapPin extends Component{
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })


  handleClick = (e) => {
    // TODO: need to refactor being used in EventCard.js as well.
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
          alert("Event has been added.")
        }
        else {
          alert("Unable to join event at the moment. Try again later.")
        }
      })
    }
  render(){
    const { open, dimmer } = this.state
    const props = this.props

    return(
      <div >
          <Modal
            trigger={<Icon
              size="large"
              color="red"
              name="map pin" onClick={this.show('blurring')} />} dimmer={dimmer} open={open} onClose={this.close}>
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
      </div>
    )
  }
}
export default EventMapPin


// style={{
//     color: 'white',
//     background: 'grey',
//     padding: '15px 10px',
//     display: 'inline-flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '100%',
//     transform: 'translate(-50%, -50%)'
//   }}
