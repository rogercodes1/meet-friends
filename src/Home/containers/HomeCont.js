import React from 'react'
import UserEventsCont from './UserEventsCont';
import NearbyEventsCont from './NearbyEventsCont';

// import PropTypes from 'prop-types'

class HomeCont extends React.Component {
  render () {
    return (
      <div>
        HomeCont
        <UserEventsCont />
        <NearbyEventsCont />
      </div>
    )

  }
}

export default HomeCont;
