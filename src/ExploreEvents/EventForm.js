import React, {Component} from 'react'
import {Form, Grid, Input, Button, Icon, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {createEventAction, selectPlaceAction} from '../actions';
let maps = "https://www.google.com/maps/place/"

// import Fetches from "../Fetches.js";
// let url ="http://localhost:3001/api/v1/places/yelp"

class EventForm extends Component{



handleChange = (e, {value}) => {
  console.log("this props is ",this.props);
   // if (typeof(e.target.name) === "undefined"){
   //   (this.setState({[name]: value}, () => { console.log(this.state) }))
   //   } else {
   //      this.setState({[e.target.name] : e.target.value}, () => {
   //         console.log(this.state)}
   //      )
   //  }
}
handleSubmit = (event) => {
  event.preventDefault()
  debugger;
  // host_id : localStorage.id
  // const body = this.state
  // Fetches.post(url, body).then(response => response.json())
  // .then(json => {
  // console.log("json", json);
  // localStorage.setItem('token', json.token);
  // localStorage.setItem('id', json.id);
  // debugger;
  //   // this.setState(user_id : json.id)
  //
  //   console.log("history", this.props.history);
  //   this.props.history.push("/home")
  // })
}

  render() {
    console.log("what is selectEvent", this.props.selectEvent);
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
            <Form onSubmit={this.handleSubmit}>

          <Form.Group>
            <Form.Field
              name="event_name"
              required control={Input} onChange={this.handleChange} width={16} label="Event Name" type="text" placeholder="Give your Event a name"/>
          </Form.Group>

          <Form.Group>
          <Form.Field
            name="date"
            required
            control={Input} width={8} defaultValue="2018-07-04"onChange={this.handleChange} label="Event Date" type="date"/>
          <Form.Field
            name="time"
            required  onChange={this.handleChange} width={8} control={Input}  type="time" label='Start Time'/>


          </Form.Group>
          <Form.Group>
            <Form.Field
              name="duration"
              label='Event Duration (0.5 = 30 mins)'
              required onChange={this.handleChange} width={8} control={Input}  min={0.5} max={3} defaultValue="0.5" step={0.5} type="number"  />
            <Form.Field
              name="friends"
              required onChange={this.handleChange} width={8} control={Input}  min={3} max={10} type="number" defaultValue="3" label='How may total friends?' />

          </Form.Group>

          <Form.Group>


            {/*add host id to state by setting localStorage*/}
            <Form.Field
              name="description"
              required control={TextArea} width={16} onChange={this.handleChange} label="Event Description" type="text"  placeholder="Describe your event! Provide what the game plan would be. i.e. grab a drink and watch the Lakers game at x time"/>

          </Form.Group>
          <Form.Group >
              <Form.Field control={Button}>Cancel</Form.Field>
              <Form.Field control={Button}>Create Event</Form.Field>
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
  console.log("this is state", state);
  return{
    selectEvent:state.selectEvent
  }
}
function mapDispatchToProps(dispatch) {
  return {
    createEvent: (saveEvent) => {
      dispatch(createEventAction(saveEvent))
    }
  }

}
const styles={
  width:"220px",
  height:"250px"
}

export default connect(mapStateToProps)(EventForm);
//
// <Form.Field
//   name="location_name"
//    control={Input} onChange={this.handleChange} width={4} label="Location Name" type="text"  value={yelpBiz.name}/>
