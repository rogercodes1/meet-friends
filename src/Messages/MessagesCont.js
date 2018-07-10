import React,{Component} from 'react'
import EventsList from './List/EventsList';
import ChatMessagesCont from './ChatBox/ChatMessagesCont';

class MessagesCont extends Component {
  render () {
    return(
      <div id="MessagesCont">
        <EventsList />
        <ChatMessagesCont />
      </div>
    )

  }
}

export default MessagesCont;
