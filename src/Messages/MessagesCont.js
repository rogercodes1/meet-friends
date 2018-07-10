import React,{Component} from 'react'
import MessageList from './MessageList';
import EventMessagesCont from './EventMessagesCont';

class MessagesCont extends Component {
  render () {
    return(
      <div id="MessagesCont">
        <MessageList />
        <EventMessagesCont />
      </div>
    )

  }
}

export default MessagesCont;
