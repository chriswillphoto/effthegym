import {combineReducers} from 'redux';
import workouts from './workouts';
import selected from './selected'
const gymApp = combineReducers({
  workouts,
  selected,
});

export default gymApp;
