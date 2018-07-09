import React from 'react'
import UserEventsCont from './UserEvents/UserEventsCont';
import NearbyEventsCont from './NearbyEvents/NearbyEventsCont';


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
