import React from 'react';
import AddWorkout from './AddWorkout'
import './Workouts.css';

const Workouts = props => {
  const workoutlist = Object.keys(props.workouts);
  console.log(workoutlist);
  const listRender = function(prop) {
    return Object.values(prop).map(workout => {
      return (
        <div key={workout.id} onClick={() => props.selectWorkout(workout)}>
          {workout.name}
        </div>
      );
    });
  };

  return (
    <div className="workouts-container">
      <div className="nav"><a href="/#/">&#60; Back</a></div>
      {workoutlist.length > 0 && listRender(props.workouts)}
      <h1> Add New Workout </h1>
      <AddWorkout addWorkout={() => props.onAddClick()} />
    </div>
  );
};

export default Workouts;
