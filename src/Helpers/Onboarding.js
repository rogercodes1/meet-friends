import React, {Component} from 'react'
import { Menu, Icon,Modal, Button } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router'


class Onboarding extends Component{
   constructor(){
    super();
    this.state={
      activeItem: "home",
      open: false

    }
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  render() {
    const { activeItem, open, dimmer } = this.state

    return (
      <Modal
         trigger={<Button id="NewMeetFriends" onClick={this.show('blurring')}><h2>New to MeetFriends? <br/> Click Here.</h2></Button>} dimmer={dimmer} open={open} onClose={this.close}>
        <Modal.Header>Welcome to MeetFriends.</Modal.Header>
        <Modal.Content image>

          <Modal.Actions>
            <p><Menu.Item
              as={NavLink}
              to="/"
              name=' home '
              active={activeItem === 'home'}
              onClick={this.handleModalClick}>
              <Icon name="home"/>Home &nbsp;
            </Menu.Item>
             will display all you current and past events. If no events present you can join nearby events when you scroll down or head over to Explore Places to find a place to host an event.
          </p>


            <p><Menu.Item
              as={NavLink}
              to="/explore-places"
              name='places'
              active={activeItem === 'places'}
              onClick={this.handleModalClick}>
              <Icon name="yelp"/>Explore Places &nbsp;
              </Menu.Item> lets you check out places by name or category. From there you can find location details through Yelp, Google Maps, and create an event to Meet Friends.
            </p>

          <p>
            <Menu.Item
                as={NavLink}
                to="/explore-events"
                name='events' active={activeItem === 'events'} onClick={this.handleModalClick}>
                <Icon name="searchengin"/>Explore Events &nbsp;
            </Menu.Item>
            shows you current events that are going on in your area. Feel free to explore and join an event. Check out the details to make sure you are all in.
          </p>
            <p>
              <Menu.Item
                as={NavLink}
                to="/messages"
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleModalClick}>
              <Icon name="comments outline"/>Messages &nbsp;
            </Menu.Item> allows you to interact with your new friends before meeting up. Once 3 friends join an event group messaging will become available. This way you can group chat and figure out the details on where you will be waiting once the event starts.
          </p>
          <p>
            Click on <Menu.Item as={Icon}>
            <Icon name="info circle"/></Menu.Item>on the top right if you need help  navigating the app.
          </p>
          </Modal.Actions>


          </Modal.Content>
      </Modal>
    );
  }
}

export default withRouter(Onboarding);
