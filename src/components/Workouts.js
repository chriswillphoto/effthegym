import React from 'react';
import './Workouts.css';

const Workouts = props => {
  if (props.workouts) {
    return (
      <div className="workouts-container">
        {props.workouts.map(workout => {
          return (
            <button key={workout.id} onClick={selectWorkout(workout)}>
              {workout.name}
            </button>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="workouts-container">
        <h1> Add New Workout </h1>
      </div>
    );
  };
}

export default Workouts;
