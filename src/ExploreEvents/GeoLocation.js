import React,{Component} from "react";
import Geolocation from "react-geolocation";
import {connect} from 'react-redux';
import { geolocationAction} from './../actions';


class GeoLocation extends Component {

  render(){
    return (
      <Geolocation
        onSuccess={console.log}
        render={({
          fetchingPosition,
          position: {
            coords: { latitude, longitude } = {} } = {},
          error,
          getCurrentPosition
        }) =>
        <div>
          <button onClick={getCurrentPosition}>
            Get Position
          </button>
          {error &&
            <div>
              {error.message}
            </div>}
            <pre>
             latitude: {latitude}
             longitude: {longitude}
           </pre>

          </div>}
          />
      );

  }
}

// function mapStateToProps(state){
//   return{
//     selectEvent: state.selectEvent,
//   }
// }
function mapDispatchToProps(dispatch) {
  return {
    saveLocation: (location) => {
      dispatch(geolocationAction(location))
    }
  }
}

export default connect(null,mapDispatchToProps)(GeoLocation)

// <pre>
//   latitude: {latitude}
//   longitude: {longitude}
// </pre>
