import React, {Component} from 'react'
import {connect} from 'react-redux';
//import PropTypes from 'prop-types'

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
    const body = this.state
    Fetches.post(url, body).then(response => response.json())
    .then(json => {
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
    return (
      <div>
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

      </div>
    );
  }
}

function mapStateToProps(state){
  return{

  }
}

export default connect(mapStateToProps)(CreateEvent);
