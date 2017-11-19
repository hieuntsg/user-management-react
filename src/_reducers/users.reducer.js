import * as types from '../_actions/action.types';
import initialState from './initialState';
import {browserHistory} from 'react-router';
export default function usersReducer(state = initialState.users, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
          return Object.assign([], state, action.users);

    case types.CREATE_USER_SUCCESS:
          browserHistory.push(`/users/${action.user.id}`)
          return [
            ...state.filter(user => user.id !== action.user.id),
            Object.assign({}, action.user)
          ];

    case types.UPDATE_USER_SUCCESS:
          return [
            ...state.filter(user => user.id !== action.user.id),
            Object.assign({}, action.user)
          ];

    // case types.DELETE_USER_SUCCESS: {
    //     const newState = Object.assign([], state);
    //     const indexOfUserToDelete = state.findIndex(user => {return user.id == action.user.id});
    //     newState.splice(indexOfUserToDelete, 1);
    //     browserHistory.push('/users');
    //     return newState;
    // }
    default: 
      return state;
  }
}