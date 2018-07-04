import React from 'react'
// import PropTypes from 'prop-types'
import {Menu, Segment} from 'semantic-ui-react';

class NearbyEvents extends React.Component {
  state = { activeItem: 'nearbyEvents' }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div id="NearbyEvents">
          <Menu pointing>
           <Menu.Item name='nearbyEvents' active={activeItem === 'nearbyEvents'} onClick={this.handleItemClick} />
           <Menu.Item\
             
             name='bars'
             active={activeItem === 'bars'}
             onClick={this.handleItemClick}
           />
           <Menu.Item
             name='Restaurants'
             active={activeItem === 'Restaurants'}
             onClick={this.handleItemClick}
           />

         </Menu>

         <Segment>
           Segment

         </Segment>
      </div>
    )

  }
}

export default NearbyEvents;
