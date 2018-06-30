import React from 'react'
import UserEvents from './UserEvents';
import NearbyEvents from './NearbyEvents';

// import PropTypes from 'prop-types'

class HomeCont extends React.Component {
  render () {
    return (
      <div>
        HomeCont
        <UserEvents />
        <NearbyEvents />
      </div>
    )

  }
}

export default HomeCont;
