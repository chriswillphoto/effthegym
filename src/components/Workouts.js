import React from 'react';
import './Workouts.css';

const Workouts = props => {
  const workoutlist = Object.keys(props.workouts);
  console.log(workoutlist);
  const listRender = function(prop) {
    return Object.values(prop).map(workout => {
      return (
        <button key={workout.id} onClick={() => props.selectWorkout(workout)}>
          {workout.name}
        </button>
      );
    });
  };

  return (
    <div className="workouts-container">
      {workoutlist.length > 0 && listRender(props.workouts)}
      <h1> Add New Workout </h1>
    </div>
  );
};

export default Workouts;
