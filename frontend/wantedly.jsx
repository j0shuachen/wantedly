import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else{
    store=configureStore();
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

import { signup, login, logout, fetchUser, fetchUsers } from './util/session_api_util';
import { createSkill, fetchSkills, fetchSkill } from './util/skill_api_util';
import { createEndorsement, fetchEndorsements, fetchEndorsement } from './util/endorsement_api_util';
window.signup = signup;
window.login = login;
window.logout = logout;
window.fetchUser = fetchUser;
window.fetchUsers = fetchUsers;
window.createSkill = createSkill;
window.fetchSkills = fetchSkills;
window.fetchSkill = fetchSkill;
window.createEndorsement = createEndorsement;
window.fetchEndorsements = fetchEndorsements;
window.fetchEndorsement = fetchEndorsement;
