import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import EventMapPin from './EventMapPin';


const mapsKey=`${process.env.REACT_APP_API_KEY_GOOGLE_MAPS}`

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class EventMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.70514,
      lng: -74.01430
    },
    zoom: 13
  }

plotPins = (events) => {

  return events.map(event=>{
    return <EventMapPin
        key={event.id}
        lat={event.lat}
        lng={event.lon}
        {...event}/>
  })
}

  render() {

    return (
      // Important! Always set the container height explicitly
      <div id="GoogleMaps" >
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
       {this.plotPins(this.props.nearbyEvents)}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    nearbyEvents: state.nearbyEvents
  }
}

export default connect(mapStateToProps)(EventMap);

// const AnyReactComponent = ({ text }) => (
//   <div style={{
//     color: 'white',
//     background: 'grey',
//     padding: '15px 10px',
//     display: 'inline-flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '100%',
//     transform: 'translate(-50%, -50%)'
//   }}>
//     {text}
//   </div>
// );
