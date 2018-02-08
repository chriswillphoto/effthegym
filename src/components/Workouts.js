import React from 'react';
import AddWorkout from './AddWorkout';
import './Workouts.css';
import Nav from './Nav';
import uniqid from 'uniqid'

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
            <a href="/#/workout/run" onClick={() => props.selectWorkout(workout.id)}>
              Go
            </a>
            <a href="/#/workout/edit" onClick={() => props.selectWorkout(workout.id)}>
              Edit
            </a>
          </div>
          {workout.exercises.map(exercise => {
            return (
              <div key={uniqid()} className="exercise-container">
                <h4>{exercise.info}</h4>
                <h6>sets: {exercise.sets}</h6>
                <h6>reps: {exercise.reps}</h6>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="workouts-container">
      <Nav address="/#/" />
      {workoutlist.length > 0 && listRender(props.workouts)}
      <h1> Add New Workout </h1>
      <AddWorkout addWorkout={() => props.onAddClick()} />
    </div>
  );
};

export default Workouts;
