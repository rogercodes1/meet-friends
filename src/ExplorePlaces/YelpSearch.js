import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {setYelpParamsAction, setYelpResultsAction} from '../actions';
import Fetches from './../Fetches.js';
const url = "http://localhost:3001/places?"


class YelpSearch  extends Component {
  state = {
    searchTerm:"seafood",
    location: "lamont, ca",
    radius: 3000,
    limit: 20,
  }
  handleSubmit = () => {
    let params = this.state
    console.log("this.state", this.state);
    this.props.setYelpParams(this.state)
    Fetches.yelpGet(url, params)
    .then(response => response.json())
    .then(yelp => {
      console.log("what is yelp",yelp)
      this.props.setNewResults(yelp.results.businesses)
  })
}
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value },
      ()=>console.log(this.state))

  }
  render() {
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
  return{
    setNewResults:(yelpArray) => {
      dispatch(setYelpResultsAction(yelpArray))
    },
    setYelpParams:(yelpArray) => {
      dispatch(setYelpParamsAction(yelpArray))
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(YelpSearch);
