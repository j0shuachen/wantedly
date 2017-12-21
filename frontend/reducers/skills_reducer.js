import merge from 'lodash/merge';
import {
  RECEIVE_SKILL,
  RECEIVE_SKILLS ,
  UPDATE_SKILL,
  RECEIVE_ERRORS
} from '../actions/skill_actions.js';

const initialState = Object.freeze({
  errors: [],

});

const SkillReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_SKILLS:

      return action.skills;

    case RECEIVE_SKILL:
      const newSkill= {[action.skill.id]: action.skill};
      return newSkill;

    case UPDATE_SKILL:
      newState = merge({}, state);
      newState[action.skill.id] = action.skill;
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

export default SkillReducer;
