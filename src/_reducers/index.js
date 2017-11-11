import {combineReducers} from 'redux';
import users from './users.reducer';

const rootReducer = combineReducers({
  // short hand property names
  users
})

export default rootReducer;