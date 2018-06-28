import React, { Component } from 'react';
import NavBar from './NavBar';
import './Assets/App.css';
import Home from './Home/homeContainer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meet Friends</h1>
        </header>

        <NavBar/>
        <Home/>


      </div>
    );
  }
}

export default App;
