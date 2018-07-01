import {combineReducers} from 'redux';
import RegisterReducer from './reducer_register';

const rootReducer = combineReducers({
  register : RegisterReducer
})

export default rootReducer;
