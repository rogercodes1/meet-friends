import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { Menu, Icon,Modal, Dropdown } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
// import AuthO from './AuthO'

class NavBar extends Component{
     constructor(props){
        super(props);
        this.state={
            activeItem: "home",
            open: false
        }
    }
show = dimmer => () => this.setState({ dimmer, open: true })
close = () => this.setState({ open: false })

handleModalClick = (e, {name, dimmer}) => {
  this.setState({
    dimmer,
    open: false,
    activeItem: name,

  })

}

handleClick = (e, { name }) => this.setState({ activeItem: name })

handleLogout = (e) => {
  localStorage.clear()
  this.props.history.push("/register")
}
handleProfile = (e) => this.props.history.push("/profile")


    render() {
    const { activeItem, open, dimmer } = this.state

    return (
      <Menu>
            <Menu.Item
              as={NavLink}
              to="/home"
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleClick}>
              <Icon name="home"/>Home
            </Menu.Item>

            <Menu.Item
              as={NavLink}
              to="/explore-places"
              name='places'
              active={activeItem === 'places'}
              onClick={this.handleClick}>
              <Icon name="yelp"/>Explore Places
              </Menu.Item>
            <Menu.Item
                as={NavLink}
                to="/explore-events"
                name='events' active={activeItem === 'events'} onClick={this.handleClick}>
            <Icon name="searchengin"/>Explore Events
            </Menu.Item>


        <Menu.Item
            as={NavLink}
            to="/messages"
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleClick}>
          <Icon name="comments outline"/>Messages
        </Menu.Item>

        <Menu.Menu position="right">
            <Dropdown  item icon="setting" simple>
                <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={this.handleLogout}>
                        <Icon
                          name="sign out"
                          color="red"
                          value="logout"/> Logout
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleProfile}>
                        <Icon name="user" color="blue" value="user"/>Profile
                    </Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown>
        </Menu.Menu>
        <Modal
          trigger={<Menu.Item  onClick={this.show('blurring')} icon="info"></Menu.Item>} dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Navigating Meet Friends</Modal.Header>
          <Modal.Content image>

            <Modal.Actions>
              <p><Menu.Item
                as={NavLink}
                to="/home"
                name=' home '
                active={activeItem === 'home'}
                onClick={this.handleModalClick}>
                <Icon name="home"/>Home &nbsp;
              </Menu.Item>
               will display all you current and past events. If no events present you can join nearby events when you scroll down.
            </p>


              <p><Menu.Item
                as={NavLink}
                to="/explore-places"
                name='places'
                active={activeItem === 'places'}
                onClick={this.handleModalClick}>
                <Icon name="yelp"/>Explore Places &nbsp;
                </Menu.Item> lets you check out places by name or category. From there you can find details through Yelp, Google Maps, and create an event to Meet Friends.
              </p>

            <p>
              <Menu.Item
                  as={NavLink}
                  to="/explore-events"
                  name='events' active={activeItem === 'events'} onClick={this.handleModalClick}>
                  <Icon name="searchengin"/>Explore Events &nbsp;
              </Menu.Item>
              shows you current events that are going on in your area. Feel free to look around and join an event. Check out the details to make sure you are all in.
            </p>
              <p>
                <Menu.Item
                  as={NavLink}
                  to="/messages"
                  name='messages'
                  active={activeItem === 'messages'}
                  onClick={this.handleModalClick}>
                <Icon name="comments outline"/>Messages &nbsp;
              </Menu.Item> allows you to interact with your new friends before meeting up. This way you can group chat and figure out the details on where at the event you will meet.
            </p>
            </Modal.Actions>




            </Modal.Content>
        </Modal>
      </Menu>
    )
  }
}

export default withRouter(NavBar);
// add after first modal tag
  // <Image wrapped size='medium' src={props.yelp_image} />


  // <Modal.Description icon="home">
  //     Within your
  //      page you will find your current and past events.
  //   </Modal.Description>

  // <Modal.Actions >
  //   <Item.Group>
        // <Item
        //     as={NavLink}
        //     to="/messages"
        //     name='messages'
        //     active={activeItem === 'messages'}
        //     onClick={this.handleModalClick}>
        //   <Icon name="comments outline"/>Messages
        // </Item>
  //     </Item.Group>
  //
  //     </Modal.Actions>
