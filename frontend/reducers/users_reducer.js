import merge from 'lodash/merge';
import {
  RECEIVE_USER,
  RECEIVE_USERS ,
  UPDATE_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions.js';

const initialState = Object.freeze({
  errors: [],

});

const UserReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){

    case RECEIVE_USERS:
      return action.users;

    case RECEIVE_USER:
    console.log(action);
      const newUser= {[action.user.id]: action.user};
      return newUser;

    case UPDATE_USER:
      newState = merge({}, state);
      newState[action.user.id] = action.user;
      return newState;

    case RECEIVE_ERRORS:
      const errors = action.errors;

      return merge({}, state, {
        errors
      });

    default:
      return state;
  }
};

export default UserReducer;
