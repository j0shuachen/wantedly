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
        password: 'guest21'
      },
      3:{
        username: 'guest3',
        password:'guest31',
      },
      4:{
        username: 'guest4',
        password: 'guest41'
      },
      5:{
        username: 'guest5',
        password: 'guest51'
      },
      6:{
        username: 'guest6',
        password: 'guest61'
      },
      7:{
        username: 'guest7',
        password: 'guest71'
      },
      8:{
        username: 'guest8',
        password: 'guest81'
      },
      9:{
        username: 'guest9',
        password: 'guest91'
      },
      10:{
        username: 'guest10',
        password: 'guest101'
      }
    };


      const num = Math.floor((Math.random() * 10) + 1) ;
      const user= guests[num];
      this.props.login({user}).then(() => this.props.history.push('/decks'));
    }

  render(){
    const personalGreeting = (currentUser, logout) => (
      <div className="loginsignup">
        <Link to="/users" className="headerbutton" onClick={this.demo}> Demo </Link>
        <div className='greetingname'>{'Hi, ' + currentUser.name + '!'}</div>
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
