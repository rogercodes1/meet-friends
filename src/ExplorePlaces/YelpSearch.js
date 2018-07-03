import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'semantic-ui-react'



export default class SearchBar extends Component {
  constructor(){
    super();

    this.state={
      isLoading: false,
      value: ""
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, value: '' })

  handleSubmit = (e, { value }) => {
    console.log("e.target",e.target);
    console.log("value", value);
    console.log("this.state", this.state);
    debugger;
    this.setState({
      value })}

  handleChange = (e, { value }) => {
    this.setState({
      isLoading: true,
      value },()=>console.log(this.state))

  }


  render() {
    // const { isLoading, value } = this.state

    return (
      <div id="SearchBarYelp">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field width={6}>
              <Input
                onChange={this.handleChange}
                value={this.state.value}
                name="value"
                label="Yelp"
                placeholder="Enter Category or Biz..."
              />
            </Form.Field>
            <Form.Field width={4}>
                <Input
                  onChange={this.handleChange}
                  value={this.state.location}
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

//
// <Search
//   loading={isLoading}
//   minCharacters={3}
//   onSearchChange={_.debounce(this.onChange, 500, { leading: true })}
//   results={results}
//   value={value}
//   placeholder="Search Yelp"
//   {...this.props}
// />
//
// <Button color="instagram">
//   <Icon name="searchengin"/> Search</Button>
