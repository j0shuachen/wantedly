import React from 'react';
import { Link, withRouter} from 'react-router-dom';


class LogInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user}).then(()=>this.props.history.goBack());
  }


  navLink(){
    if (this.props.formType === 'login'){
      return <Link className="logintosignup" to="/signup">Sign Up</Link>;
    }else{
      return <Link className="logintosignup" to="/login">Log In</Link>;
      }
  }

  cap(){
    if (this.props.formType === 'login'){
      return "Log In";
    }else{
      return "Sign Up";
    }
  }

  renderErrors(){
    return(
      <div>
        {this.props.errors.map((error, i) => (
          <div className='errorz' key={`error-${i}`}>{error}</div>
        ))}
      </div>
    );
  }

  render () {
    return (
      <div className="logincontainer">
        <div className='loginscreener'>
        <form onSubmit={this.handleSubmit} className="loginformbox">
          <div className="signupformtop">Login</div>

          <div className="loginformbody">

            <label className="usernameform">
              <div className="signupques">Username:</div>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signupinput"/>
            </label>

            <label className="usernameform">
              <div className="signupques">Password:</div>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signupinput"/>
            </label>

            <span className="errors">{this.renderErrors()}</span>
          <input className="formosignup" type="submit" value="Log In"/>
        </div>

        <div className="signupwelcome">
          <div className='signupbuttontop'>
            <div className="alreadyamember">Not a member?</div>
            <div className="signtuptologin">{this.navLink()}</div>
          </div>

        </div>

        </form>
        </div>
      </div>
      );
    }
  }


export default withRouter(LogInForm);
