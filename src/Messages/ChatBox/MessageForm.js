import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction} from '../../actions';
import {Form, Button} from 'semantic-ui-react';


class MessageForm extends Component{


handleSubmitMessage = () => {
  debugger
}

  render(){
    console.log("this.props.selectedChatEvent",this.props.selectedChatEvent);
    return (
      <Form onSubmit={this.handleSubmitMessage.bind(this)} reply id="MessageForm">
       <Form.TextArea id="FormTextArea"/>
       <Button content='Add Comment' labelPosition='left' icon='edit' primary />
     </Form>

    )
  }

}
function mapStateToProps(state){
  return{
    loadEvent: state.selectChatEvent
  }
}
function mapDispatchToProps(dispatch) {
  return {
    submitEventComment: (comments) => {
      dispatch(eventCommentsAction(comments))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(MessageForm)
