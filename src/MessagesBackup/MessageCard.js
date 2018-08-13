import React,{Component} from 'react'
import {Comment} from 'semantic-ui-react'

const dog2 = require('./../Assets/Avatars/dog2.png')
console.log(dog2);
class MessageCard extends Component{


  render(){
    const {comment} = this.props
    const timeStamp = this.props.created_at.split("T")
    return (

      <React.Fragment>
        <Comment id='MessageCard'>
        <Comment.Avatar src={dog2} />
        <Comment.Content>
          <Comment.Author>Your Initials Here. R.P.</Comment.Author>
          <Comment.Metadata>
            <div>
              Date: {timeStamp[0]} &nbsp;
            Time: {timeStamp[1].split("Z")[0]}
          </div>
          </Comment.Metadata>
          <Comment.Text>{comment}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>May not be used</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </React.Fragment>

    )
  }
}
export default (MessageCard)
