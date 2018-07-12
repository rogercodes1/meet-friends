import React, {Component} from 'react'
import {Form, Grid, Input, Button, Icon, TextArea} from 'semantic-ui-react';
import Fetches from '../Fetches';
import {connect} from 'react-redux';
import {createEventAction, displayFormAction} from '../actions';
import {currentDate} from '../Helpers/date';
const maps = "https://www.google.com/maps/place/"
let url ="http://localhost:3001/api/v1/events/"

class EventForm extends Component{
  constructor(props){
    super(props)

    this.state ={
      event_name: "",
      description: "",
      date: currentDate(),
      duration: 0.5,
      time: "21:00",
      friends:2,
      host_id: localStorage.id,
    }
}

handleChange = (e) => {
      this.setState({[e.target.name] : e.target.value})
}
handleSubmit = (e) => {
  e.preventDefault()
  const maps = "https://www.google.com/maps/place/"
  let yelpData = this.props.selectEvent
  let address = yelpData.location.display_address.join(" ")
  const eventData = {
    ...this.state,
    location_name: yelpData.name,
    address: address,
    yelp_url: yelpData.url,
    maps_link: maps + address,
    yelp_image: yelpData.image_url,
    lat : yelpData.coordinates.latitude,
    lon: yelpData.coordinates.longitude

  }
  this.props.createEvent(eventData)
  this.props.displayForm(false)
  Fetches.post(url, eventData)
  .then(response => response.json())
  .then(json => {
  this.props.history.push("/home")
  })
}

  render() {
    console.log("currentDate",currentDate());
    let yelpBiz = this.props.selectEvent
    let address = (yelpBiz.length===0)? "Empire State Building, NY" : yelpBiz.location.display_address.join(" ")
    return (
      <div id="EventForm">
        <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
          <h3>{yelpBiz.name}</h3>
          <h5>{address}</h5>
          <img src={yelpBiz.image_url} style={styles} alt=""/> <br />
          <a href={yelpBiz.url} name="yelp_url" target="_blank">
            <Button color='red'>
             <Icon name='yelp' /> Yelp
           </Button> </a>

         <a href={maps + address} name="maps_link" target="_blank">
             <Button color='google plus'>
              <Icon name="google"/><Icon name='map' />
            </Button> </a>
        </Grid.Column>


          <Grid.Column>
            <Form onSubmit={this.handleSubmit.bind(this)}>

          <Form.Group>
            <Form.Field
              name="event_name"
              required control={Input} onChange={this.handleChange} width={16} label="Event Name" type="text" placeholder="Mention what you want to do at this event. Ex: Grab Coffee, Watch Lakers Game, etc."/>
          </Form.Group>

          <Form.Group>
          <Form.Field
            name="date"
            required
            control={Input} width={8} defaultValue={this.state.date} onChange={this.handleChange} label="Event Date" type="date"/>
          <Form.Field
            name="time"
            required  onChange={this.handleChange} width={8} control={Input}  type="time" label='Start Time'/>


          </Form.Group>
          <Form.Group>
            <Form.Field
              name="duration"
              label='Event Duration (0.5 = 30 mins)'
              required onChange={this.handleChange} width={8} control={Input}  min={0.5} max={3} placeholder="Enter Event Duration" step={0.5} type="number"  />
            <Form.Field
              name="friends"
              required onChange={this.handleChange} width={8} control={Input}  min={2} max={10} type="number" placeholder="Enter how many friends you want to join" label='Total Friends' />

          </Form.Group>

          <Form.Group>


            {/*add host id to state by setting localStorage*/}
            <Form.Field
              name="description"
              required control={TextArea} width={16} onChange={this.handleChange} label="Event Description" type="text"  placeholder="Describe your event! Provide what the game plan would be. i.e. grab a drink and watch the Lakers game at x time"/>

          </Form.Group>
          <Form.Group >
              <Button negative>Cancel</Button>
              <Form.Field color="facebook" control={Button}>Create Event</Form.Field>
          </Form.Group>
        </Form>
        </Grid.Column>
        </Grid.Row>

      </Grid>


      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    selectEvent:state.selectEvent
  }
}
function mapDispatchToProps(dispatch) {
  return {
    createEvent: (event) => {
      dispatch(createEventAction(event))
    },
    displayForm: (toggleDisplay) => {
      dispatch(displayFormAction(toggleDisplay))
    }
  }

}
const styles={
  width:"220px",
  height:"250px"
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
//yelp fullAddress
//yelp url
//yelp image
//yelp title
// goog/e link

// <Form.Field
//   name="location_name"
//    control={Input} onChange={this.handleChange} width={4} label="Location Name" type="text"  value={yelpBiz.name}/>
