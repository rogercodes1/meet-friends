import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction} from '../actions';
import MessageForm from './MessageForm';
import {Comment} from 'semantic-ui-react';


class EventMessagesCont extends Component{


displayEventMessages = () => {

}

  render(){
    return (
      <Comment.Group id="MessageEventBox">
        {this.props.loadComments}
        <MessageForm />
      </Comment.Group>

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

export default connect(mapStateToProps,mapDispatchToProps)(EventMessagesCont)
