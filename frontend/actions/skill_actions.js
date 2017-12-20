import * as APIUtil from '../util/skill_api_util';
export const RECEIVE_SKILLS = "RECEIVE_SKILLS";
export const RECEIVE_SKILL = "RECEIVE_SKILL";
export const UPDATE_SKILL = "UPDATE_SKILL";
export const RECEIVE_ERRORS ="RECEIVE_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
export const receiveEndorsements = skills => ({
  type: RECEIVE_SKILLS,
  skills
});

export const receiveEndorsement = skill =>({
  type: RECEIVE_SKILL,
  skill
});

export const fetchEndorsements = filters => dispatch =>(
  APIUtil.fetchEndorsements(filters).then(skilles =>(
    dispatch(receiveEndorsements(skilles))
  ))
);

export const fetchEndorsement = id => dispatch =>(
  APIUtil.fetchEndorsement(id).then(skille =>(
    dispatch(receiveEndorsement(skille))
  ))
);

export const createEndorsement = skill => dispatch => (
  APIUtil.createEndorsement(skill).then(skille => (
    dispatch(receiveEndorsement(skille))
  ))
);

export const updateEndorsement = skill => dispatch => {
  return APIUtil.updateEndorsement(skill).then(resp => {
    dispatch(receiveEndorsement(resp));
  }) ;
};
