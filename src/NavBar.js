import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { Menu, Icon, Dropdown } from 'semantic-ui-react'
import {Redirect, NavLink} from 'react-router-dom';
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

      // delete localStorage

      this.props.history.push("/")
    }

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
                to="/ExploreEvents"
                name='events' active={activeItem === 'events'} onClick={this.handleClick}>
            <Icon name="searchengin"/>Explore Events
            </Menu.Item>

        <Menu.Item
            as={NavLink}
            to="/ExplorePlaces"
        name='places'
          active={activeItem === 'places'}
          onClick={this.handleClick}>
          <Icon name="yelp"/>Explore Places
        </Menu.Item>

        <Menu.Item
            as={NavLink}
            to="/Messages"
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
                    <Dropdown.Item>
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
