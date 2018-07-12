import React,{Component} from 'react'
import {Icon} from 'semantic-ui-react'

class EventMapPin extends Component{


  render(){

    return(
      <div >
        <Icon
          size="large"
          color="red"
          name="map pin"/>
      </div>
    )

  }
}
export default EventMapPin


// style={{
//     color: 'white',
//     background: 'grey',
//     padding: '15px 10px',
//     display: 'inline-flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '100%',
//     transform: 'translate(-50%, -50%)'
//   }}
