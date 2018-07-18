import React from 'react'
import {Menu, Segment} from 'semantic-ui-react';
import CurrentUserEvents from './CurrentUserEvents';

class UserEventsCont extends React.Component {
  state = { activeItem: 'currentEvents' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state
    return (
      <div className="HomeDisplayCont">
          <Menu pointing>
           <Menu.Item name='currentEvents' active={activeItem === 'currentEvents'} onClick={this.handleItemClick} />
           <Menu.Item disabled
             name='pastEvents'
             active={activeItem === 'pastEvents'}
             onClick={this.handleItemClick}
             />
           <Menu.Item disabled
             name='savedEvents'
             active={activeItem === 'savedEvents'}
             onClick={this.handleItemClick}
           />

         </Menu>

         <Segment>
            <CurrentUserEvents />
         </Segment>
      </div>
    )

  }
}


export default (UserEventsCont);
