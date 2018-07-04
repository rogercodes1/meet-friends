import React from 'react'
import UserEventsCont from './UserEventsCont';
import NearbyEvents from './NearbyEvents';

// import PropTypes from 'prop-types'

class HomeCont extends React.Component {
  render () {
    return (
      <div>
        HomeCont
        <UserEventsCont />
        <NearbyEvents />
      </div>
    )

  }
}

export default HomeCont;
