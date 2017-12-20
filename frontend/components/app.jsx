import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import Splash from './splash_page';
import HeaderBar from './header/header_bar_container';
import {SignUpContainer, LogInContainer} from './session/session_container';
import UserIndexContainer from './user/user_container';
const App = () => (

  <div className='container'>
    <header>
      <div className='headerbarlogo'>W &nbsp; A &nbsp; N &nbsp; T &nbsp; E &nbsp; D &nbsp; L &nbsp; Y</div>
      <HeaderBar/>
    </header>

    <Switch>
      <Route path='/login' component={LogInContainer}/>
      <Route path='/signup' component={SignUpContainer}/>
        <Route path='/users' component={UserIndexContainer}/>

      <Route path='/' component={Splash}/>
    </Switch>

    <footer>
      <div className="foot">
        <a className='linkedinlink' target='_blank' href= 'https://www.linkedin.com/in/joshuaschen/'><img className='linkedinlogo' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1513733354/Logo-Black-21px-R.png'/> </a>
      </div>
    </footer>
  </div>
);

export default App;
