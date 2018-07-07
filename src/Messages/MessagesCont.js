import React,{Component} from 'react'
import MessageList from './MessageList';
import MessageEventBox from './MessageEventBox';

class MessagesCont extends Component {
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
