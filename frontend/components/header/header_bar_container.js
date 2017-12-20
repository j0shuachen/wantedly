import { connect } from 'react-redux';
import { login, logout, signup} from '../../actions/session_actions';
import HeaderBar from './header_bar';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: ()=> dispatch(logout()),
  login: user => dispatch(login(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(HeaderBar);
