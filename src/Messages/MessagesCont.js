import React,{Component} from 'react'

import {Grid, Menu, Segment, Image, Header, Comment} from 'semantic-ui-react';
import {connect} from 'react-redux';



class MessagesCont extends Component {
  state = { activeItem: 1 }



  render () {

    const {userEvents, activeItem} = this.props
    console.log(activeItem);
    return(
      <div id="">
        Hi

      </div>
    )

  }
}

export default (MessagesCont)
