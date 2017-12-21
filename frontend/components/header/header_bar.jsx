import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class HeaderBar extends React.Component{
  constructor(props){
      super(props);
      this.state = {

      };
      this.demo=this.demo.bind(this);
    }

  demo(){
    const guests = {
      1:{
        username: 'guest1',
        password: 'guest11'
      },
      2:{
        username: 'guest2',
        password: 'guest11'
      },
      3:{
        username: 'guest3',
        password: 'guest11',
      },
      4:{
        username: 'guest4',
        password: 'guest11'
      },

    };


      const num = Math.floor((Math.random() * 4) + 1) ;
      const user= guests[num];
      this.props.login({user}).then(()=>this.props.history.goBack());
    }

  render(){
    const personalGreeting = (currentUser, logout) => (

      <div className="loginsignup">
        <Link to="/users" className="headerbutton" onClick={this.demo}> Demo </Link>
        <div className='greetingname'>{'Hi, ' + currentUser.username + '!'}</div>
        <Link to="/"className="headerbutton" onClick={logout}> Log Out </Link>
      </div>
      
    );

  const sessionLinks =() =>{
    return (

      <div className="loginsignup">
        <Link to="/" className="headerbutton" onClick={this.demo}> Demo </Link>
        <Link to="/login" className="headerbutton"> Login </Link>
        <Link to="/signup" className="headerbutton"> Signup </Link>
      </div>

    );
  };

  const {currentUser, logout} = this.props;
    return (
      currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
      );
    }

  }

export default HeaderBar;
