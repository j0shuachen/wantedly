import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RECEIVE_USER,
  UPDATE_USER

} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer= (state = nullUser, action) =>{
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {
        errors
      });

    case RECEIVE_USER:
    console.log(action, 'action');
      const user = {[action.user.id]: action.user};
      return user;

    case UPDATE_USER:
      const update = merge({}, state);
      update[action.user.id] = action.user;

    default:
      return state;
  }
};

export default SessionReducer;
