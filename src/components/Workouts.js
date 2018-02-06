import React from 'react';
import AddWorkout from './AddWorkout';
import './Workouts.css';

const Workouts = props => {
  const workoutlist = Object.keys(props.workouts);
  const listRender = function(prop, selected) {
    return Object.values(prop).map(workout => {
      return (
        <div key={workout.id} onClick={() => props.selectWorkout(workout)}>
          <h4>{workout.name}</h4>
        <a href="/#/workout/edit" onClick={() => props.selectWorkout(workout) }>Edit</a>
        </div>
      );
    });
  };

  return (
    <div className="workouts-container">
      <div className="nav">
        <a href="/#/">&#60; Back</a>
      </div>
      {workoutlist.length > 0 && listRender(props.workouts, props.selected)}
      <h1> Add New Workout </h1>
      <AddWorkout addWorkout={() => props.onAddClick()} />
    </div>
  );
};

export default Workouts;
