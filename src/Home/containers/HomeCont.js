import React from 'react'
import UserEventsCont from './UserEventsCont';
import NearbyEventsCont from './NearbyEventsCont';


class HomeCont extends React.Component {
  render () {
    return (
      <div>
        <UserEventsCont />
        <NearbyEventsCont />
      </div>
    )

  }
}

export default HomeCont;
