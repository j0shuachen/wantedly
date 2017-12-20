import { connect } from 'react-redux';

import { login, logout, signup} from '../../actions/session_actions';
import SignUpForm from './signup';
import LogInForm from './login';
const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)), formType

  };
};

export const SignUpContainer =  connect (
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);

export const LogInContainer =  connect (
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);
