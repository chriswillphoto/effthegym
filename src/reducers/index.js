import {combineReducers} from 'redux';
import workouts from './workouts';

const gymApp = combineReducers({
  workouts,
});

export default gymApp;
