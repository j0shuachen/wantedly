import * as APIUtil from '../util/endorsement_api_util';
export const RECEIVE_ENDORSEMENTS = "RECEIVE_ENDORSEMENTS";
export const RECEIVE_ENDORSEMENT = "RECEIVE_ENDORSEMENT";
export const UPDATE_ENDORSEMENT = "UPDATE_ENDORSEMENT";
export const RECEIVE_ERRORS ="RECEIVE_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
export const receiveEndorsements = endorsements => ({
  type: RECEIVE_ENDORSEMENTS,
  endorsements
});

export const receiveEndorsement = endorsement =>({
  type: RECEIVE_ENDORSEMENT,
  endorsement
});

export const fetchEndorsements = filters => dispatch =>(
  APIUtil.fetchEndorsements(filters).then(endorsementes =>(
    dispatch(receiveEndorsements(endorsementes))
  ))
);

export const fetchEndorsement = id => dispatch =>(
  APIUtil.fetchEndorsement(id).then(endorsemente =>(
    dispatch(receiveEndorsement(endorsemente))
  ))
);

export const createEndorsement = endorsement => dispatch => (
  APIUtil.createEndorsement(endorsement).then(endorsemente => (
    dispatch(receiveEndorsement(endorsemente))
  ))
);

export const updateEndorsement = endorsement => dispatch => {
  return APIUtil.updateEndorsement(endorsement).then(resp => {
    dispatch(receiveEndorsement(resp));
  }) ;
};
