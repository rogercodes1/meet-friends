import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction} from '../actions';
import {Form, Button} from 'semantic-ui-react';


class MessageForm extends Component{


  render(){
    return (
      <Form reply>
       <Form.TextArea />
       <Button content='Add Comment' labelPosition='left' icon='edit' primary />
     </Form>

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

export default connect(mapStateToProps,mapDispatchToProps)(MessageForm)
