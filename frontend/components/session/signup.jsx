import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      username: '',
      email:'',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cap= this.cap.bind(this);
    this.navLink= this.navLink.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink(){
    if (this.props.formType === 'login'){
      return <Link className="signuptologin" to="/signup">Sign Up</Link>;
    } else {
      return <Link className="signuptologin" to="/login">Log In</Link>;
      }
    }

  cap(){
    if (this.props.formType === 'login'){
      return "Log In";
    }
    else{
      return "Sign Up";
    }
  }

  renderErrors(){
    return(
      <div>
        {this.props.errors.map((error, i) => (
          <div className='errorz' key={`error-${i}`}>
            {error}
          </div>
        ))}
      </div>
    );
  }

  render () {
    return (
      <div className="signupcontainer">
        <div className='signupscreener'>
        <form onSubmit={this.handleSubmit} className="signupformbox">

          <div className="signupformtop"> Sign Up </div>
          <div className='signupformbody'>

            <label className="usernameform">
              <span className="signupques">First Name:</span>
                <input type="text"
                  value={this.state.f_name}
                  onChange={this.update('f_name')}
                  className="signupinput"
                  placeholder=""/>
            </label>

            <label className="usernameform">
              <span className="signupques">Last Name:</span>
                <input type="text"
                  value={this.state.l_name}
                  onChange={this.update('l_name')}
                  className="signupinput"
                  placeholder=""/>
            </label>

            <label className="usernameform">
              <span className="signupques">Username:</span>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signupinput"/>
            </label>

            <label className="usernameform">
              <span className="signupques">Password:</span>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signupinput"/>
            </label>

            <label className="usernameform">
              <span className="signupques"> Email:</span>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signupinput"
                  placeholder=""/>
            </label>

            <input type="submit" value="Continue" className="formosignup"/>
          </div>


          <div className="signupwelcome">

            <span className="privacy">By clicking "Continue", you agree to our Terms of Service, Privacy Policy, and Cookie Policy.</span>

            <div className='signupbuttontop'>
              <div className="alreadyamember">Already a member?</div>
              <div className="signuptologin">{this.navLink()}</div>
            </div>

          </div>

        </form>
      </div>
      </div>
      );
    }
  }

export default withRouter(SignUpForm);
