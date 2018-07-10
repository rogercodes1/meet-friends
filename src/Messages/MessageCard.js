import React,{Component} from 'react'
import {connect} from 'react-redux';
import {Comment} from 'semantic-ui-react'
import {eventCommentsAction} from '../actions';
// import Avatars from './../../Assets/Avatars/';
const dog2 = require('./../Assets/Avatars/dog2.png')
class MessageCard extends Component{


  render(){
    const props = this.props
    return (
        <Comment id='MessageCard'>
        <Comment.Avatar src={dog2} />
        <Comment.Content>
          <Comment.Author>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>{props.comment}</Comment.Text>
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

export default connect(mapStateToProps,mapDispatchToProps)(MessageCard)
