import merge from 'lodash/merge';
import {
  RECEIVE_ENDORSEMENT,
  RECEIVE_ENDORSEMENTS ,
  UPDATE_ENDORSEMENT,
  RECEIVE_ERRORS
} from '../actions/endorsement_actions.js';

const initialState = Object.freeze({
  errors: [],

});

const EndorsementReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){

    case RECEIVE_ENDORSEMENTS:
      return action.endorsements;

    case RECEIVE_ENDORSEMENT:
      const newEndorsement= {[action.endorsement.id]: action.endorsement};
      return newEndorsement;

    case UPDATE_ENDORSEMENT:
      newState = merge({}, state);
      newState[action.endorsement.id] = action.endorsement;
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

export default EndorsementReducer;
