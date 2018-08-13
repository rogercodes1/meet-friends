import React,{Component} from 'react'
import {connect} from 'react-redux';
import {eventCommentsAction, onChangeChatMessageAction} from '../actions';
// import {Form, Button} from 'semantic-ui-react';
// import Fetches from '../Fetches';
let url =`${process.env.REACT_APP_BACKEND_URL}api/v1/comments`

class MessageForm extends Component{
  

  render(){

    return (
      <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <article className="chat">
          <header className="chat-header">
            <div className="h3 chat-title">Event Chat
            </div>
            </header>
      <form name="chatForm" className="form-horizontal chat-form">
            <div className="form-group">
              <label htmlFor="chat-username" className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="chat-username" required placeholder="Enter your name"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="chat-message" className="col-sm-2 control-label">Message</label>
              <div className="col-sm-10">
                <div className="input-group">
                  <input type="text" placeholder="Enter a message, then press enter" className="form-control" id="chat-message" rows="2" autoComplete="off"
                   required />
                 <span className="input-group-btn">
                    <button id="chat-submit" className="btn btn-info" type="submit">Chat</button>
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div className="panel panel-default">
              <div className="panel-body chat-display">
                <p className="text-muted chat-text">Welcome...add your message using the form above</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    )
  }

}


export default (MessageForm)
