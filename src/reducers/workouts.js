const workouts = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return {...state, [action.workout.id]: action.workout};

    case 'ADD_EXERCISE_TO_WORKOUT':
      let target = [action.exercise.workout_id];
      state[target] = {
        ...state[target],
        exercises: [...state[target].exercises, action.exercise.info],
      };
      return {...state};
    case 'SELECT_WORKOUT':
      return {...state, selected: action.workout}
    default:
      return state;
  }
};

export default workouts;
