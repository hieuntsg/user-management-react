import * as types from './action.types';
import usersApi from '../_api/users.api';

export function loadUsersSuccess(users) {
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER_SUCCESS, user}
}

export function createUserSuccess(user) {
  return {type: types.CREATE_USER_SUCCESS, user}
}

export function deleteUserSuccess(user) {
  return {type: types.DELETE_USER_SUCCESS, user}
}

export function loadUsers() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return usersApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateUser(user) {
  return function (dispatch) {
    return usersApi.updateUser(user).then(responseUser => {
      console.log(responseUser);
      dispatch(updateUserSuccess(responseUser));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createUser(user) {
  return function (dispatch) {
    return usersApi.createUser(user).then(responseUser => {
      dispatch(createUserSuccess(responseUser));
      return responseUser;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteUser(user) {
  return function(dispatch) {
    return usersApi.deleteUser(user).then(() => {
      console.log(`Deleted ${user.id}`)
      dispatch(deleteUserSuccess(user));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
