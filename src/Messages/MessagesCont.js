import React from 'react'
import MessageList from './MessageList';
import MessageEventBox from './MessageEventBox';

class MessagesCont extends React.Component {
  render () {
    return(
      <div id="MessagesCont">
        <MessageList />
        <MessageEventBox />
      </div>
    )

  }
}

export default MessagesCont;
