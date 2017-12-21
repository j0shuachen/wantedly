import * as APIUtil from '../util/skill_api_util';
export const RECEIVE_SKILLS = "RECEIVE_SKILLS";
export const RECEIVE_SKILL = "RECEIVE_SKILL";
export const UPDATE_SKILL = "UPDATE_SKILL";
export const RECEIVE_ERRORS ="RECEIVE_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
export const receiveSkills = skills => ({
  type: RECEIVE_SKILLS,
  skills
});

export const receiveSkill = skill =>({
  type: RECEIVE_SKILL,
  skill
});

export const fetchSkills = filters => dispatch =>(
  APIUtil.fetchSkills(filters).then(skilles =>(
    dispatch(receiveSkills(skilles))
  ))
);

export const fetchSkill = id => dispatch =>(
  APIUtil.fetchSkill(id).then(skille =>(
    dispatch(receiveSkill(skille))
  ))
);

export const createSkill = skill => dispatch => (
  APIUtil.createSkill(skill).then(skille => (
    dispatch(receiveSkill(skille))
  ))
);

export const updateSkill = skill => dispatch => {
  return APIUtil.updateSkill(skill).then(resp => {
    dispatch(receiveSkill(resp));
  }) ;
};
