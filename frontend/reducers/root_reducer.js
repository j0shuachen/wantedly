import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SkillReducer from './skills_reducer';
import EndorsementReducer from './endorsements_reducer';
import UserReducer from './users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  endorsements: EndorsementReducer,
  skills: SkillReducer,
  users: UserReducer


});


export default RootReducer;
