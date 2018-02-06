import {connect} from 'react-redux';
import Edit from '../components/Edit';
import {addExerciseToWorkout} from '../actions';

const mapStateToProps = state => {
  return {
    workout: state.selected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addExercise: exercise => {
      dispatch(addExerciseToWorkout(exercise));
    },
  };
};

const WorkoutEditor = connect(mapStateToProps, mapDispatchToProps)(Edit);
export default WorkoutEditor;
