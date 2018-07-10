import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction} from '../actions';

class MessageEventBox extends Component{


  render(){
    const props = this.props
    return (
        <Comment id='MessageCard'>
        <Comment.Avatar src='./Assets/Avatars/dog2.png' />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

    )
  }

}
function mapStateToProps(state){
  return{
    loadComments: state.eventComments,
    
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveEventComments: (comments) => {
      dispatch(eventCommentsAction(comments))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(MessageEventBox)
