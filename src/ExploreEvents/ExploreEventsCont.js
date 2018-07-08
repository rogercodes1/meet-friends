import React from 'react'
import ExploreEventsList from './ExploreEventsList';
// import GoogleMapEvents from 'google-map-react';

import EventsMap from './EventsMap';
class ExploreEventsCont extends React.Component {


  render () {

    return(
      <div>
        <EventsMap/>
        <ExploreEventsList/>
      </div>
    )

  }
}

export default ExploreEventsCont;
