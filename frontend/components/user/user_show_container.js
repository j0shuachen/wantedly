import {connect} from 'react-redux';
import {fetchUser, fetchUsers} from '../../actions/session_actions';
import {fetchSkills, createSkill} from '../../actions/skill_actions';
import {createEndorsement} from '../../actions/endorsement_actions';
import UserShow from './user_show';

const mapStateToProps = (state, {match}) => {
  console.log(state, 'state');

  return {
    currentUser: state.session.currentUser,
    user: Object.values(state.users)[0],
    skills: Object.values(state.skills),

  };

};

const mapDispatchToProps = dispatch => ({

  fetchUser: id => dispatch(fetchUser(id)),
  fetchSkills: id => dispatch(fetchSkills(id)),
  createSkill: skill => dispatch(createSkill(skill)),
  createEndorsement: endorsement => dispatch(createEndorsement(endorsement))


});




export  default  connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
