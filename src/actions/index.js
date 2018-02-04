export const addWorkout = workout => {
  return {
    type: 'ADD_WORKOUT',
    workout,
  };
};

export const addExerciseToWorkout = exercise => {
  return {
    type: 'ADD_EXERCISE_TO_WORKOUT',
    exercise,
  };
};

export const selectWorkout = workout => {
  return {
    type: 'SELECT_WORKOUT',
    workout,
  };
};
