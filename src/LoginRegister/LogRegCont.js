import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Login from './Login';
import Register from './Register';
import {Menu, Segment} from 'semantic-ui-react';

class LoginSignUpContainer extends Component{
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
                      <Register {...this.props} /> : <Login {...this.props} />}


                </Segment>

            </div>
        )
    }
}

export default LoginSignUpContainer
