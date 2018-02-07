import {connect} from 'react-redux';
import Run from '../components/Run';

const mapStateToProps = state => {
  return {
    workout: state.workouts[state.selected],
  };
};

const WorkoutRunner = connect(mapStateToProps)(Run);
export default WorkoutRunner;
