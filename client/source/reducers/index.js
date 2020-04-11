import { combineReducers } from 'redux';
import foo from '../reducers/foo.reducer';
import skill from '../reducers/skill.reducer';

export default combineReducers({
  foo,
  skill,
});
