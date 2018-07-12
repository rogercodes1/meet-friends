import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const mapsKey=`${process.env.REACT_APP_API_KEY_GOOGLE_MAPS}`

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class EventMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.70514,
      lng: -74.01430
    },
    zoom: 13
  };

  render() {

    return (
      // Important! Always set the container height explicitly
      <div id="GoogleMaps" >
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.70514}
            lng={-74.01430}
            text={'Manhattan'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default EventMap;

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
