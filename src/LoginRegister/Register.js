import React, {Component} from 'react'
//import PropTypes from 'prop-types'
// import verify from '../Helpers/date.js';
import {Form, Input, Button, Select} from 'semantic-ui-react';
import adapter from './../adapter.js';
let url = "http://localhost:3001/api/v1/users"
const options = [
  {
    id: "other",key: 'o', text: 'Other', value: 'other'
  }, {
    id: "male",
    key: 'm',
    text: 'Male',
    value: 'male'
  }, {
    id: "female",
    key: 'f',
    text: 'Female',
    value: 'female'
  }
]


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      gender: "other",
      birthday: "",
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
    const body = this.state
    adapter.post(url, body).then(response => response.json()).then(json => {
    console.log("json", json);
    localStorage.setItem('token', json.token);
    localStorage.setItem('id', json.id);
    debugger;
      // this.setState(user_id : json.id)

      console.log("history", this.props.history);
      this.props.history.push("/home")
    })
  }

  render() {

    // console.log("Confirm", verify.LegalAge(("2011,5,29"), ("2010,6,29")))

    return (
      <div id="register">
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Field required control={Input} onChange={this.handleChange} width={8} label="First Name" type="text" name="first_name" placeholder="First Name"/>
          <Form.Field required control={Input} onChange={this.handleChange} width={8} label="Last Name" type="text" name="last_name" placeholder="Last Name"/>
        </Form.Group>

        <Form.Field required control={Input} onChange={this.handleChange} label="Email" type="email" name="email" placeholder="Enter Email"/>

        <Form.Group>
          <Form.Field required control={Input} width={8} onChange={this.handleChange} label="Password" type="password" name="password" placeholder="Enter Password"/>

          <Form.Field control={Input} disabled width={8} onChange={this.handleChange} label="Verify Password" type="password" name="verifyPassword" placeholder="Re-Enter Password"/>
        </Form.Group>

        <Form.Group>
          <Form.Field requiredid="formDate"  onChange={this.handleChange} width={8} control={Input} name="birthday" type="date" label='Birthday'></Form.Field>
          <Form.Field required width={8} onChange={this.handleChange} control={Select} name="gender" label='Gender' options={options} placeholder='Gender'/>

        </Form.Group>



        <Form.Field id="registerButton" control={Button}>Register</Form.Field>

      </Form>

    </div>);
  }
}

export default Register;


// <Form.Field required="required" control={Input} onChange={this.handleChange} label="Phone" type="phone" name="phone" placeholder="555-555-5555"/>
// <Form.Field id="resetButton"
//     type="reset"
//     control={Button}>Reset </Form.Field>
