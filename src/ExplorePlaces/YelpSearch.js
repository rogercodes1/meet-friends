import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {yelpSearchAction, yelpSubmitAction} from '../actions';
import Fetches from './../Fetches.js';
const url = "http://localhost:3001/api/v1/places"


class YelpSearch  extends Component {
  state = {
    searchTerm:"seafood",
    location: "lamont, ca",
  }
  handleSubmit = () => {
    let body = this.state
    console.log("this.state", this.state);
    this.props.submitYelpSearch(this.state)
    debugger;
    Fetches.post(url, body)
    .then(response => response.json())
    .then(json => {
    console.log("json", json)
    debugger
  })
}
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value },
      ()=>console.log(this.state))

  }


  render() {
    console.log("yelSubmit",this.props.yelpSubmit);
    return (
      <div id="YelpSearch">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field width={7}>
              <Input
                onChange={this.handleChange}
                name="searchTerm"
                label="Search Yelp"
                placeholder="Enter Category or Biz..."
              />
            </Form.Field>
            <Form.Field width={6}>
                <Input
                  onChange={this.handleChange}
                  name="location"
                  label="Location"
                  placeholder="Enter City,State or Zip Code..."
                />
              </Form.Field>

              <Form.Field id="searchButton" control={Button}><Icon name="searchengin"/> Search</Form.Field>

          </Form.Group>

            </Form>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    defaultYelpDisplay: state.yelpSearch,
    initialYelpDisplay: state.yelpSubmit
  }
}
function mapDispatchToProps(dispatch){
  console.log(dispatch);
  return{
    submitYelpSearch:(searchState) => {
      dispatch(yelpSubmitAction(searchState))
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(YelpSearch);
