import React,{Component} from 'react'
import EventsList from './EventsList';
import EventMessagesCont from './EventMessagesCont';

class MessagesCont extends Component {
  render () {
    return(
      <div id="MessagesCont">
        <EventsList />
        <EventMessagesCont />
      </div>
    )

  }
}

export default MessagesCont;
