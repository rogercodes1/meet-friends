import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction} from '../actions';
import MessageForm from './MessageForm';
import MessageCard from './MessageCard';

import {Comment} from 'semantic-ui-react';


class ChatMessagesCont extends Component{


displayEventMessages = (comments) => {
  return comments.map(comment=>{
    return <MessageCard
        key={comment.id}
        {...comment} />
  })
}

  render(){
    console.log("what is load Comments", this.props.loadComments);
    return (
      <div id="MessageEventBox">
        <Comment.Group >

        {(this.props.loadComments === []) ? (<h1>Be the first to message!! </h1>) : this.displayEventMessages(this.props.loadComments)}
      </Comment.Group>
        <MessageForm />
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
