import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { Menu, Icon, Dropdown } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
// import AuthO from './AuthO'

class NavBar extends Component{
     constructor(props){
        super(props);
        this.state={
            activeItem: "home"
        }
    }
    handleClick = (e, { name }) => this.setState({ activeItem: name })
    handleLogout = (e) => {
      localStorage.clear()
      this.props.history.push("/register")
    }
    handleProfile = (e) => this.props.history.push("/profile")


    render() {
    const { activeItem } = this.state

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
                to="/explore-events"
                name='events' active={activeItem === 'events'} onClick={this.handleClick}>
            <Icon name="searchengin"/>Explore Events
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
            to="/messages"
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleClick}>
          <Icon name="comments outline"/>Messages
        </Menu.Item>
        <Menu.Menu position='right'>
            <Dropdown  item icon="setting" simple>
                <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={this.handleLogout}>
                        <Icon
                          name="log out"
                          color="red"
                          value="logout"/>Logout
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleProfile}>
                        <Icon name="user" color="blue" value="user"/>Profile
                    </Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withRouter(NavBar);
