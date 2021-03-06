
const setStateToLocalStorage = (state) => localStorage.setItem('eff-the-gym-workout-state', JSON.stringify(state))

const workouts = (state = {}, action) => {
  switch (action.type) {
    case "ADD_WORKOUT":
      setStateToLocalStorage({ ...state, [action.workout.id]: action.workout })
      return { ...state, [action.workout.id]: action.workout };
    
    case "DELETE_WORKOUT":
      delete state[action.workout.id]
      setStateToLocalStorage(state)
      return {...state}

    case "ADD_EXERCISE_TO_WORKOUT":
      let target = [action.exercise.workout_id];
      state[target] = {
        ...state[target],
        exercises: [...state[target].exercises, action.exercise.info]
      };
      setStateToLocalStorage(state)
      return { ...state };

    case "DELETE_EXERCISE_FROM_WORKOUT":
      let delTarget = [action.exercise.workout_id];
      let newEx = state[delTarget].exercises.filter(exercise => {
        return exercise !== action.exercise;
      });

      state[delTarget] = {
        ...state[delTarget],
        exercises: newEx
      };

      setStateToLocalStorage(state)

      return { ...state };

    case "FETCH_WORKOUT_FROM_LOCALSTORAGE":
      if( localStorage.getItem('eff-the-gym-workout-state') ){
        const savedWorkouts = JSON.parse( localStorage.getItem('eff-the-gym-workout-state') )
        return {...savedWorkouts}
      }else{
        return state;
      }

    default:
      return state;
  }

};

export default workouts;
