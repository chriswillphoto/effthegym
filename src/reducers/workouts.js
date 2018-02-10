const workouts = (state = {}, action) => {
  switch (action.type) {
    case "ADD_WORKOUT":
      return { ...state, [action.workout.id]: action.workout };

    case "ADD_EXERCISE_TO_WORKOUT":
      let target = [action.exercise.workout_id];
      state[target] = {
        ...state[target],
        exercises: [...state[target].exercises, action.exercise.info]
      };
      return { ...state };
    case "DELETE_EXERCISE_FROM_WORKOUT":
      let delTarget = [action.exercise.workout_id];
      console.log(action)
      let newEx = state[delTarget].exercises.filter(exercise => {
        return exercise !== action.exercise
      });

      console.log(newEx)
      state[delTarget] = {
        ...state[delTarget],
        exercises: newEx
      };

      return { ...state };
    default:
      return state;
  }
};

export default workouts;
