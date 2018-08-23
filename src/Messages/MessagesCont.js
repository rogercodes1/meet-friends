import React,{Component} from 'react'
import MessageForm from './MessageForm';

import {connect} from 'react-redux';



class MessagesCont extends Component {
  state = {  }


  render () {

    const {userEvents, activeItem} = this.props
    console.log(activeItem);
    return(
      <div id="">
        <MessageForm />

      </div>
    )

  }
}

export default (MessagesCont)
