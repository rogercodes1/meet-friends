import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { createStore} from 'redux'
import reducer from './Reducer/reducer.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

  // eslint-disable no-underscore-dangle
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// eslint-enable

ReactDOM.render(<Provider store={store}>

  <Router><App /></Router>

  </Provider>, document.getElementById('root'));
// registerServiceWorker();
