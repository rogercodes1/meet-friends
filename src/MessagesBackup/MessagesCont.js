import React,{Component} from 'react'
import EventsList from './List/EventsList';
import ChatMessagesCont from './ChatBox/ChatMessagesCont';
import {connect} from 'react-redux';
import {saveUserEventsAction, eventCommentsAction, selectedChatEventAction} from '../actions';
const url = `http://localhost:3001/api/v1/users/${localStorage.id}/`


class MessagesCont extends Component {

  fetchMessages = () => {
      fetch(url)
      .then(response=>response.json())
      .then(json=>{
        debugger
      this.props.saveUserEvents(json.events)
      this.props.selectedChatEvent(json.events[0])

      })
  }
  render () {
    return(
      <div id="MessagesCont">
        <EventsList />
        <ChatMessagesCont />
      </div>
    )

  }
}

function mapStateToProps(state){
  return{
    loadComments: state.eventComments
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveEventComments: (comments) => {
      dispatch(eventCommentsAction(comments))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(MessagesCont)
