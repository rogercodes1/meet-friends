import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore} from 'redux'
import reducer from './reducer/reducer_register.js';
import {Provider} from 'react-redux';
const store = createStore(reducer)

console.log("store.getStore", store.getState())

ReactDOM.render(<Provider store={store}>

  <Router><App /></Router>

  </Provider>, document.getElementById('root'));
// registerServiceWorker();
