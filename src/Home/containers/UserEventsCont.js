import React from 'react'
import {Menu, Segment, Button, Card, Image} from 'semantic-ui-react';
import {connect} from 'react-redux';
import CurrentUserEvents from '../CurrentUserEvents';

class UserEventsCont extends React.Component {
  state = { activeItem: 'currentEvents' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state
    console.log("PROPS props", this.props);
    return (
      <div id="UserEventsCont">
          <Menu pointing>
           <Menu.Item name='currentEvents' active={activeItem === 'currentEvents'} onClick={this.handleItemClick} />
           <Menu.Item
             name='savedEvents'
             active={activeItem === 'savedEvents'}
             onClick={this.handleItemClick}
           />
           <Menu.Item
             name='pastEvents'
             active={activeItem === 'pastEvents'}
             onClick={this.handleItemClick}
           />

         </Menu>

         <Segment>
           <Card.Group id="UserEventCard">
            <CurrentUserEvents />
         </Card.Group>
         </Segment>
      </div>
    )

  }
}


export default (UserEventsCont);
