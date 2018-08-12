import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction, onChangeChatCommentAction} from '../actions';
import {Form, Button} from 'semantic-ui-react';
import Fetches from '../Fetches';
let url =`${process.env.REACT_APP_BACKEND_URL}api/v1/comments`

class CommentForm extends Component{

handleSubmit = (e) => {
  e.preventDefault()
  console.log('activeItem', this.props.activeItem);

  const data = {
    event_id: this.props.loadEvent.id,
    user_id: parseInt(localStorage.id, 10),
    comment: this.props.loadUpdatedComment
  }
  console.log('data', data);

  e.target.comment.value = ""
  Fetches.post(url, data)
  .then(res=>res.json())
  .then(json=>{
    console.log(json.messages);
    debugger
    this.props.updateComments(json.messages)
  })

}

  render(){

    return (
      <Form onSubmit={this.handleSubmit} reply id="CommentForm">
       <Form.TextArea onChange={this.props.handleInputChange} name="Comment" id="FormTextArea"/>
       <Button content='New Comment' labelPosition='left' icon='edit' primary />
     </Form>

    )
  }

}
function mapStateToProps(state){
  return{
    loadEvent: state.selectedChatEvent,
    loadUpdatedComment: state.onChangeChatComment
  }
}
function mapDispatchToProps(dispatch) {
  return {
    updateComments: (comments) => {
      dispatch(eventCommentsAction(comments))
    },
    onChangeChatComment: (comment) => {
      dispatch(onChangeChatCommentAction(comment))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm)
