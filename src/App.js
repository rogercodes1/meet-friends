import socketIOClient from 'socket.io-client'
import React, {Component} from 'react';
import './Assets/App.css';
import NavBar from './NavBar.js';
import { subscribeToTimer } from './api';
import Footer from './Footer.js';
import RegisterCont from './LoginRegister/RegisterCont';
import HomeCont from './Home/HomeCont';
import EventsCont from './ExploreEvents/ExploreEventsCont';
import ProfileCont from './Settings/Profile';
import PlacesCont from './ExplorePlaces/ExplorePlacesCont';
import CommentsCont from './Comments/CommentsCont';
import MessagesCont from './Messages/MessagesCont';

import AuthO from './AuthO'
import {Route, Redirect, Switch} from 'react-router-dom';

class App extends Component {

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Meet Friends</h1>
        {AuthO.loggedIn() ? null : <h3 className="subTitle">Developing new friendships in the age of Digital technology</h3>}
      </header>
      <Switch>
      {
        AuthO.loggedIn()
          ? <React.Fragment>
              <NavBar/>
              <Route exact path="/" render={(props) => <HomeCont {...props}/>}/>
              <Route exact path="/explore-places" render={(props) => <PlacesCont {...props}/>}/>
              <Route exact path="/explore-events" render={(props) => <EventsCont {...props}/>}/>
              <Route exact path="/comments" render={(props) => <CommentsCont {...props}/>}/>
              <Route exact path="/messages" render={(props) => <MessagesCont {...props}/>}/>
              <Route exact path="/profile" render={(props) => <ProfileCont {...props}/>}/>

            </React.Fragment>
          : <Route exact path="/" render={(props) => <RegisterCont {...props}/>}/>
      }
      {
        AuthO.loggedIn()
          ? null
        : (<Redirect to="/"/>)
      }

      </Switch>
      <Footer />



    </div>);
  }
}

// TODOTODO:
// Remove grey bar from login
// Look into Oauth and get user data from Gmail, Facebook, Github, Yelp for online access.
// Register add animal selection.catch
// Add edit to profile data
// add remove profile


export default(App);
