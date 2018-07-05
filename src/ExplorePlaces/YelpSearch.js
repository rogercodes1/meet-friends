import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {yelpSearchAction, yelpSubmitAction} from '../actions';


class YelpSearch  extends Component {


  handleSubmit = (e, { value }) => {
    console.log("e.target",e.target);
    console.log("value", value);
    console.log("this.state", this.state);
    this.setState({ value })
    }

  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value },()=>console.log(this.state))

  }


  render() {
    console.log(this.props);
    return (
      <div id="YelpSearch">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field width={6}>
              <Input
                onChange={this.handleChange}
                value={this.props.defaultYelpDisplay.searchTerm}
                name="searchTerm"
                label="Search Yelp"
                placeholder="Enter Category or Biz..."
              />
            </Form.Field>
            <Form.Field width={4}>
                <Input
                  onChange={this.handleChange}
                  value={this.props.defaultYelpDisplay.location}
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
    defaultYelpDisplay: state.yelpSearch
  }
}
function mapDispatchToProps(dispatch){
  console.log(dispatch);
  return{
    submitYelpSearch:(searchTerm) => {
      dispatch(yelpSubmitAction(searchTerm))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(YelpSearch)
