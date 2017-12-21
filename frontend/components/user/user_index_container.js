import {connect} from 'react-redux';
import {fetchUser, fetchUsers} from '../../actions/session_actions';
import UserIndex from './user_index';

const mapStateToProps = (state, {match}) => {
  return {
    currentUser: state.session.currentUser,
    users: Object.values(state.users)
  };

};

const mapDispatchToProps = dispatch => ({

  fetchUser: id => dispatch(fetchUser(id)),
  fetchUsers: () => dispatch(fetchUsers())

});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
