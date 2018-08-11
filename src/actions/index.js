import {
  ADD_WORKOUT,
  DELETE_WORKOUT,
  ADD_EXERCISE_TO_WORKOUT,
  SELECT_WORKOUT,
  DELETE_EXERCISE_FROM_WORKOUT
} from "./actionTypes";

export const addWorkout = workout => {
  console.log('test')
  return {
    type: ADD_WORKOUT,
    workout
  };
};

export const deleteWorkout = workout => {
  return {
    type: DELETE_WORKOUT,
    workout
  };
};

export const addExerciseToWorkout = exercise => {
  return {
    type: ADD_EXERCISE_TO_WORKOUT,
    exercise
  };
};

export const selectWorkout = workout => {
  return {
    type: SELECT_WORKOUT,
    workout
  };
};

export const deleteExerciseFromWorkout = exercise => {
  return {
    type: DELETE_EXERCISE_FROM_WORKOUT,
    exercise
  };
};

export const fetchWorkoutsFromLocal = () => {
  return {
    type: "FETCH_WORKOUT_FROM_LOCALSTORAGE"
  };
};
