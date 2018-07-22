import React, {Component} from 'react'
import UserEventsCont from './User/UserEventsCont';
import NearbyEventsCont from './Nearby/NearbyEventsCont';
import {connect} from 'react-redux';
import {displayNearbyEventsAction, saveUserEventsAction} from '../actions';


class HomeCont extends Component {


  componentDidMount(){
    this.fetchCurrentUserEvents()
    this.fetchNearbyEvents()}

  fetchNearbyEvents = () => {
    const url = `http://localhost:3001/api/v1/events/nearby?id=${localStorage.id}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
    this.props.saveNearbyEvents(data)
    })
  }

  render () {
    return (
      <div>
        <UserEventsCont />
        <NearbyEventsCont />
      </div>
    )

  }
}

function mapStateToProps(state){
  return{
    nearbyEvents: state.nearbyEvents
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveNearbyEvents: (allEvents) => {
      dispatch(displayNearbyEventsAction(allEvents))
    },
    saveUserEvents: (userEvents) => {
      dispatch(saveUserEventsAction(userEvents))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeCont);
