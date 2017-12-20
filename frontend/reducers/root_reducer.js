import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SkillReducer from './skills_reducer';
import EndorsementReducer from './endorsements_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  endorsement: EndorsementReducer,
  skill: SkillReducer


});


export default RootReducer;
