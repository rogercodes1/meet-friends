import React, {Component} from 'react'
import {Form, Input, Button} from 'semantic-ui-react';
import Fetches from './../Fetches.js';

//import PropTypes from 'prop-types'
let url = "http://localhost:3001/sessions/"

class Login extends Component{
     constructor(){
        super();
        this.state={
          email: "",
          password: "",

        }
    }
    handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log("handleSubmit this.state",this.state);

    const body = this.state
    Fetches.post(url,body)
    .then(response=>response.json())
    .then(json => {
      console.log("json", json)

      if (json.status = "accepted") {
        localStorage.setItem('token', json.token)
        localStorage.setItem('id', json.id)
      // console.log("localStorage", localStorage)
      //   console.log("history", this.props.history)
        this.props.history.push("/home")
      }
      else{
        console.log("alert", json.token);
        alert("incorrect login creds! Try again")
      }
    })
  }
  handleChange = (e) => {
      console.log("before",e.target.name, "other", e.target.value)
      this.setState({[e.target.name] : e.target.value}, () => console.log(this.state))
  }

    render() {
      console.log("this.props",this.props);
        return (
            <div id="login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field
                      onChange={this.handleChange}
                        control={Input}
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter Email"/>
                    <Form.Field
                      onChange={this.handleChange}
                        control={Input}
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter Password"/>
                    <Form.Field id="loginButton" control={Button}>Login</Form.Field>

                </Form>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//   return {
//     email: state.email,
//     password: state.email
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//
//     login: dispatch
//   }
// }

export default Login;
