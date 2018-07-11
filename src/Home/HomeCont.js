import React from 'react'
import UserEventsCont from './User/UserEventsCont';
import NearbyEventsCont from './Nearby/NearbyEventsCont';


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
