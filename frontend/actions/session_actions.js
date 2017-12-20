import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export const receiveUser = user =>({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users =>({
  type: RECEIVE_USERS,
  users
});

export const receiveCurrentUser = currentUser =>({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch =>(
  APIUtil.signup(user).then(res =>(
    dispatch(receiveCurrentUser(res))
  ), err =>(dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(resp =>(
    dispatch(receiveCurrentUser(resp))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(user => (
    dispatch(receiveUsers(user))
  ))
);

export const updateUser = user => dispatch => {
  return APIUtil.updateUser(user).then(resp => {
    dispatch(receiveUser(resp));
  });
};
