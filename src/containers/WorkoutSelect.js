import {connect} from 'react-redux';
import {addWorkout} from '../actions';
import Workouts from '../components/Workouts';

const mapStateToProps = state => {
  return {
    workouts: state.workouts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: workout => {
      console.log(workout);
    },
  };
};

const WorkoutSelect = connect(mapStateToProps, mapDispatchToProps)(Workouts);
export default WorkoutSelect
