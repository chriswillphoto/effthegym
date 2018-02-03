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
