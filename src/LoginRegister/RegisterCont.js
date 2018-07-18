import React, {Component} from 'react'
import Login from './Login.js';
import Register from './Register.js';
import {Menu, Segment} from 'semantic-ui-react';

class RegisterCont extends Component{
    constructor(props){
        super(props);
        this.state = {
          activeItem: 'register',

    }

}
handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
}
        render(){
        return (
            <div id="LogRegCont">
                <div>
                <Menu tabular>
                    <Menu.Item
                        name='register'
                        active={this.state.activeItem === 'register'}
                        onClick={this.handleItemClick} />

                    <Menu.Item
                        name='login'
                        active={this.state.activeItem === 'login'}
                        onClick={this.handleItemClick} />
                </Menu>
                </div>
                <Segment>
                    {(this.state.activeItem ==="register") ?
                      <Register {...this.props} handleItemClick={this.handleItemClick}/> : <Login {...this.props} handleItemClick={this.handleItemClick}/>}
                </Segment>
            </div>
        )
    }
}

export default RegisterCont
