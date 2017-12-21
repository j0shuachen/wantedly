import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash_page';
import HeaderBar from './header/header_bar_container';
import {SignUpContainer, LogInContainer} from './session/session_container';
import UserIndexContainer from './user/user_index_container';
import UserShowContainer from './user/user_show_container';

const App = () => (

  <div className='container'>
    <header>
      <Link to='/users' className='headerbarlogo'>W &nbsp; A &nbsp; N &nbsp; T &nbsp; E &nbsp; D &nbsp; L &nbsp; Y</Link>
      <HeaderBar/>
    </header>

    <Switch>
      <AuthRoute path='/login' component={LogInContainer}/>
      <AuthRoute path='/signup' component={SignUpContainer}/>
        <Route exact path='/users/:id' component={UserShowContainer}/>
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
