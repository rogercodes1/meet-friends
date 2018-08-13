import React,{Component} from 'react'
import {connect} from 'react-redux';
require('bootstrap');
import {eventCommentsAction, onChangeChatMessageAction} from '../actions';
// import {Form, Button} from 'semantic-ui-react';
// import Fetches from '../Fetches';
let url =`${process.env.REACT_APP_BACKEND_URL}api/v1/comments`

class MessageForm extends Component{


  render(){

    return (
      <form name="chatForm" class="form-horizontal chat-form">
            <div class="form-group">
              <label for="chat-username" class="col-sm-2 control-label">Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="chat-username" required placeholder="Enter your name"/>
              </div>
            </div>
            <div class="form-group">
              <label for="chat-message" class="col-sm-2 control-label">Message</label>
              <div class="col-sm-10">
                <div class="input-group">
                  <input type="text" placeholder="Enter a message, then press enter" class="form-control" id="chat-message" rows="2" autocomplete="off"
                   required />
                  <span class="input-group-btn">
                    <button id="chat-submit" class="btn btn-info" type="submit">Chat</button>
                  </span>
                </div>
              </div>
            </div>
          </form>

    )
  }

}


export default (MessageForm)
