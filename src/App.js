import React, {Component} from 'react';
import './Assets/App.css';
import NavBar from './NavBar.js';
import RegisterCont from './LoginRegister/LogRegCont';
import HomeCont from './Home/containers/HomeCont';
import EventsCont from './ExploreEvents/ExploreEventsCont';
import ProfileCont from './Settings/Profile';
import PlacesCont from './ExplorePlaces/ExplorePlacesCont';
import MessagesCont from './Messages/MessagesCont';
// import {connect} from 'react-redux';
import {Route, Redirect, Switch} from 'react-router-dom';
import AuthO from './AuthO'

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Meet Friends</h1>
      </header>
      <Switch>
      {
        AuthO.loggedIn()
          ? <React.Fragment>
              <NavBar/>
              <Route exact path="/home" render={(props) => <HomeCont {...props}/>}/>

              <Route exact path="/explore-events" render={(props) => <EventsCont {...props}/>}/>

              <Route exact path="/explore-places" render={(props) => <PlacesCont {...props}/>}/>

              <Route exact path="/messages" render={(props) => <MessagesCont {...props}/>}/>
              <Route exact path="/profile" render={(props) => <ProfileCont {...props}/>}/>

            </React.Fragment>
          : <Route exact path="/register" render={(props) => <RegisterCont {...props}/>}/>
      }
      {
        AuthO.loggedIn()
          ? null
        : (<Redirect to="/register"/>)
      }
      </Switch>



    </div>);
  }
}

export default App;
