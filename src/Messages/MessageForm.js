import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction, onChangeChatMessageAction} from '../actions';
import {Form, Button} from 'semantic-ui-react';
import Fetches from '../Fetches';
let url ="http://localhost:3001/api/v1/comments"

class MessageForm extends Component{

handleChange = (e) => {
  console.log(e.target.value);
  this.props.onChangeChatMessage(e.target.value)
}
handleSubmitMessage = (e) => {
  const data = {
    event_id: this.props.loadEvent.id,
    user_id: parseInt(localStorage.id, 10),
    comment: this.props.loadUpdatedMessage

  }
  debugger
  e.target.message.value = ""
  Fetches.post(url, data)
  .then(res=>res.json())
  .then(json=>{
    console.log(json.comments);
    this.props.submitEventComment(json.comments)
  })

}

  render(){
    console.log("loadedEvent", this.props.loadEvent);
    return (
      <Form onSubmit={this.handleSubmitMessage.bind(this)} reply id="MessageForm">
       <Form.TextArea onChange={this.handleChange}name="message" id="FormTextArea"/>
       <Button content='Add Comment' labelPosition='left' icon='edit' primary />
     </Form>

    )
  }

}
function mapStateToProps(state){
  return{
    loadEvent: state.selectChatEvent,
    loadUpdatedMessage: state.onChangeChatMessage
  }
}
function mapDispatchToProps(dispatch) {
  return {
    submitEventComment: (comments) => {
      dispatch(eventCommentsAction(comments))
    },
    onChangeChatMessage: (comment) => {
      dispatch(onChangeChatMessageAction(comment))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(MessageForm)
