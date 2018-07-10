import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction} from '../../actions';
import MessageForm from './MessageForm';
import {Comment} from 'semantic-ui-react';


class ChatMessagesCont extends Component{


displayEventMessages = () => {

}

  render(){
    return (
      <div id="MessageEventBox">
        <Comment.Group >
        {this.props.loadComments}
        <MessageForm />
      </Comment.Group>
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

export default connect(mapStateToProps,mapDispatchToProps)(ChatMessagesCont)
