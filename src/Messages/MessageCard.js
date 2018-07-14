import React,{Component} from 'react'
import {Comment} from 'semantic-ui-react'

const dog2 = require('./../Assets/Avatars/dog2.png')
class MessageCard extends Component{


  render(){
    const props = this.props

    return (

      <React.Fragment>

        <Comment id='MessageCard'>
        <Comment.Avatar src={dog2} />
        <Comment.Content>
          <Comment.Author>Your Initials Here. R.P.</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>{props.comment}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </React.Fragment>

    )
  }

}


export default (MessageCard)
