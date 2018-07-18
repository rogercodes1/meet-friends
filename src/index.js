import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { createStore} from 'redux'
import reducer from './reducer/reducer.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

  // eslint-disable no-underscore-dangle
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// eslint-enable

// console.log("store.getState", store.getState())

ReactDOM.render(<Provider store={store}>

  <Router><App /></Router>

  </Provider>, document.getElementById('root'));
// registerServiceWorker();
