import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction} from '../actions';

class MessageEventBox extends Component{


  render(){
    return (
      <div id="MessageEventBox">
        {this.props.loadComments}

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

export default connect(mapStateToProps,mapDispatchToProps)(MessageEventBox)
