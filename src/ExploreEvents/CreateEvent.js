import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Select, Form, Input, Button, TextArea} from 'semantic-ui-react';
import Fetches from "../Fetches.js";
let url ="http://localhost:3001/api/v1/places/yelp"

class CreateEvent extends Component{
   constructor(){
    super();

    this.state={

    }
  }

  handleChange = (e, {name, value}) => {
       if (typeof(e.target.name) === "undefined"){
         (this.setState({[name]: value}, () => { console.log(this.state) }))
         } else {
            this.setState({[e.target.name] : e.target.value}, () => {
               console.log(this.state)}
            )
         }
      }
  handleSubmit = (event) => {

    event.preventDefault()
    debugger;
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
    return (
      <div id="CreateEvent">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
          <Form.Field
            name="yelp_image"
            disabled
            control={Input} onChange={this.handleChange} width={4} label="Yelp Image" type="text"  value="https://s3-media1.fl.yelpcdn.com/bphoto/bbzPH6NPF_oDn8zTrrP3ZQ/o.jpg"/>
            <Form.Field
              name="maps_link"
              disabled
              hidden control={Input} onChange={this.handleChange} width={4} label="Yelp Image" type="text"  value="https://www.google.com/maps/place/62%20Stone%20St%20New%20York,%20NY%2010004"/>
              <Form.Field
                name="yelp_url"
                disabled
                hidden control={Input} onChange={this.handleChange} width={4} label="Yelp Link" type="text"  value="https://www.yelp.com/biz/financier-patisserie-stone-street-new-york-3?adjust_creative=ylpIamtpUho-ihYtmG2nAA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ylpIamtpUho-ihYtmG2nAA"/>
              <Form.Field
                name="address"
                disabled required control={Input} onChange={this.handleChange} label="Address" type="text"  value="address_data"/>

          </Form.Group>

          <Form.Group>
            <Form.Field
              name="location_name"
              disabled control={Input} onChange={this.handleChange} width={4} label="Location Name" type="text"  value="yelp location name"/>

            <Form.Field
              name="event_name"
              required control={Input} onChange={this.handleChange} width={8} label="Event Name" type="text" placeholder="Give your Event a name"/>

          </Form.Group>



          <Form.Group>
            <Form.Field
              name="description"
              required control={TextArea} width={8} onChange={this.handleChange} label="Event Description" type="text"  placeholder="Describe your event! Provide what the game plan would be. i.e. grab a drink and watch the Lakers game at x time"/>



          </Form.Group>

          <Form.Group>
            <Form.Field
              name="date"
              control={Input} width={4} defaultValue="2018-07-04"onChange={this.handleChange} label="Event Date" type="date"/>
            <Form.Field
              name="time"
              required  onChange={this.handleChange} defaultValue="T16:00:00" width={4} control={Input}  type="time" label='Start Time'/>
            <Form.Field
              name="duration"
              required onChange={this.handleChange} width={4} control={Input}  min={0.5} max={3} defaultValue="0.5" step={0.5} type="number" label='Event Duration (hour)' />
            <Form.Field
              name="friends"
              required onChange={this.handleChange} width={4} control={Input}  min={3} max={10} type="number" defaultValue="3" label='How may total friends?' />
            {/*add host id to state by setting localStorage*/}


          </Form.Group>
          <Form.Group >
              <Form.Field width="13" control={Button}>Cancel</Form.Field>
              <Form.Field control={Button}>Create Event</Form.Field>
          </Form.Group>

        </Form>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{

  }
}

export default connect(mapStateToProps)(CreateEvent);
