import React, { Component } from 'react';
import './Assets/App.css';
import NavBar from './NavBar.js';
import RegisterCont from './LoginRegister/LogRegCont';
import HomeCont from './Home/HomeCont';
import EventsCont from './Events/ExploreEventsCont';
import PlacesCont from './Places/ExplorePlacesCont';
import MessagesCont from './Messages/MessagesCont';

import {Route, Redirect } from 'react-router-dom';
import AuthO from './AuthO'

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Meet Friends</h1>
      </header>
      <React.Fragment>
        <NavBar/>
        <Route exact="exact" path="/Home" render={(props) => <HomeCont {...props}/>}/>

        <Route exact="exact" path="/ExploreEvents" render={(props) => <EventsCont {...props}/>}/>

        <Route exact="exact" path="/ExplorePlaces" render={(props) => <PlacesCont {...props}/>}/>

        <Route exact="exact" path="/Messages" render={(props) => <MessagesCont {...props}/>}/>

      </React.Fragment>

      {AuthO.loggedIn()? <Redirect to="/Home"/> :
        <Route exact path="/Register" render={(props) => <RegisterCont
          setUserId={this.setUserId} {...props} /> } />}



    </div>);
  }
}

export default App;
