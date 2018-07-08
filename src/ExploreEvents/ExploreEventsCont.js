import React from 'react'
// import PropTypes from 'prop-types'
import EventsList from './EventsList';
// import GoogleMapEvents from 'google-map-react';
import {Card} from 'semantic-ui-react';

import EventsMap from './EventsMap';
class ExploreEventsCont extends React.Component {




  render () {

    return(
      <div>
        <EventsMap/>
        <EventsList/>
      </div>
    )

  }
}

export default ExploreEventsCont;
