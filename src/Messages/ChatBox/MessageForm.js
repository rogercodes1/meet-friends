import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction, onChangeChatMessageAction} from '../../actions';
import {Form, Button} from 'semantic-ui-react';
import Fetches from '../../Fetches';
let url ="http://localhost:3001/api/v1/comments"

class MessageForm extends Component{

handleChange = (e) => {
  console.log(e.target.value);
  this.props.onChangeChatMessage(e.target.value)
}
handleSubmitMessage = (e) => {
  debugger
  const data = {
    event_id: this.props.id,
    user_id: localStorage.id,
    comment: this.props.loadUpdatedMessage

  }
  Fetches.post(url, data)
  .then(res=>res.json())
  .then(json=>{
    console.log(json);
    debugger
    this.props.submitEventComment(json)
  })

}

  render(){
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
