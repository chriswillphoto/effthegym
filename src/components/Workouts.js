import React from "react";
import AddWorkout from "./AddWorkout";
import "./Workouts.css";
import Nav from "./Nav";
import ExerciseInfo from "./ExerciseInfo";
import uniqid from "uniqid";

const Workouts = props => {
  const workoutlist = Object.keys(props.workouts);
  const listRender = function(prop) {
    return Object.values(prop).map(workout => {
      return (
        <div
          className="workout-container"
          key={workout.id}
          onClick={() => props.selectWorkout(workout.id)}
        >
          <div className="workout-buttons">
            <h4>{workout.name}</h4>
            <a
              className="go-button"
              href="/#/workout/run"
              onClick={() => props.selectWorkout(workout.id)}
            >
              Go
            </a>
            <ol className={"exercise-container" + (workout.exercises.length === 0 ? " empty": "")}>
            {workout.exercises.map(exercise => {
              return (
                  <ExerciseInfo
                    delete={() => props.delExercise(exercise, workout.id)}
                    exercise={exercise}
                  />
              );
            })}
            </ol>
            <a
              href="/#/workout/edit"
              onClick={() => props.selectWorkout(workout.id)}
            >
              Add Exercises to this Workout
            </a>
            <button onClick={() => props.deleteWorkout(workout)}>Delete this workout</button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="workouts-container">
      <Nav address="/#/" />
      {workoutlist.length === 0 && (
        <h2 className="empty-header">
          You Haven't Created Any Workouts! Add One Below.
        </h2>
      )}
      {workoutlist.length > 0 && listRender(props.workouts)}
      <AddWorkout />
    </div>
  );
};

export default Workouts;
