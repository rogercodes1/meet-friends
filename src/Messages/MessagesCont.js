import React from 'react'
import MessageList from './MessageList';
import EventMessages from './EventMessages';

class MessagesCont extends React.Component {
  render () {
    return(
      <div>
        <MessageList />
        <EventMessages />
      </div>
    )

  }
}

export default MessagesCont;
