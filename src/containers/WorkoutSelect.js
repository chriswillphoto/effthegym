import { connect } from "react-redux";
import { selectWorkout, deleteExerciseFromWorkout, deleteWorkout, fetchWorkoutsFromLocal } from "../actions";
import Workouts from "../components/Workouts";

const mapStateToProps = state => {
  return {
    workouts: state.workouts,
    selected: state.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteWorkout: workout => {
      dispatch(deleteWorkout(workout));
    },
    selectWorkout: workout => {
      dispatch(selectWorkout(workout));
    },
    delExercise: (exercise, id) => {
      exercise.workout_id = id;
      // console.log(exercise, id)
      dispatch(deleteExerciseFromWorkout(exercise));
    },
    fetchWorkouts: () => {
      dispatch(fetchWorkoutsFromLocal());
    }
  };
};

const WorkoutSelect = connect(mapStateToProps, mapDispatchToProps)(Workouts);
export default WorkoutSelect;
