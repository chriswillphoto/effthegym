import {connect} from 'react-redux';
import {selectWorkout} from '../actions';
import Workouts from '../components/Workouts';

const mapStateToProps = state => {
  return {
    workouts: state.workouts,
    selected: state.selected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: workout => {
      console.log(workout);
    },
    selectWorkout: workout => {
      dispatch(selectWorkout(workout));
    },
  };
};

const WorkoutSelect = connect(mapStateToProps, mapDispatchToProps)(Workouts);
export default WorkoutSelect;
