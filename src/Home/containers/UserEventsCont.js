import React from 'react'
import {Menu, Segment, Card} from 'semantic-ui-react';
import CurrentUserEvents from '../HomeCurrentUserEvents';

class UserEventsCont extends React.Component {
  state = { activeItem: 'currentEvents' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state
    return (
      <div className="HomeDisplayCont">
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
