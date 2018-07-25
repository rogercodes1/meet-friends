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
    const url = `${process.env.REACT_APP_BACKEND_URL}api/v1/events/nearby?id=${localStorage.id}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
    this.props.saveNearbyEvents(data)
    })
  }
  fetchCurrentUserEvents = () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}api/v1/users/${localStorage.id}/`
      fetch(url)
      .then(response=>response.json())
      .then(userData=>{
      this.props.saveUserEvents(userData.events)
      })
  }

  render () {
    return (
      <div>
        <UserEventsCont />
        {this.props.userEvents.length > 0 ?
          <NearbyEventsCont />
          : null }

      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    userEvents: state.userEvents
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
