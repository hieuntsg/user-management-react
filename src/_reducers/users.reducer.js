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

    case types.DELETE_USER_SUCCESS: {
        const newState = Object.assign([], state);
        const indexOfUserToDelete = state.findIndex(user => {return user.id == action.user.id})
        newState.splice(indexOfUserToDelete, 1);
        browserHistory.push('/users');
        return newState;
    }
    default: 
      return state;
  }
}



// import { userConstants } from '../_constants';

// export function users(state = {}, action) {
//   switch (action.type) {
//     case userConstants.GETALL_REQUEST:
//       return {
//         loading: true
//       };
//     case userConstants.GETALL_SUCCESS:
//       return {
//         items: action.users
//       };
//     case userConstants.GETALL_FAILURE:
//       return { 
//         error: action.error
//       };
//     case userConstants.DELETE_REQUEST:
//       // add 'deleting:true' property to user being deleted
//       return {
//         ...state,
//         items: state.items.map(user =>
//           user.id === action.id
//             ? { ...user, deleting: true }
//             : user
//         )
//       };
//     case userConstants.DELETE_SUCCESS:
//       // remove deleted user from state
//       return {
//         items: state.items.filter(user => user.id !== action.id)
//       };
//     case userConstants.DELETE_FAILURE:
//       // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
//       return {
//         ...state,
//         items: state.items.map(user => {
//           if (user.id === action.id) {
//             // make copy of user without 'deleting:true' property
//             const { deleting, ...userCopy } = user;
//             // return copy of user with 'deleteError:[error]' property
//             return { ...userCopy, deleteError: action.error };
//           }

//           return user;
//         })
//       };
//     default:
//       return state
//   }
// }