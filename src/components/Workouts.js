import React from 'react';
import './Workouts.css';

const Workouts = props => {
  if (props.workouts) {
    return (
      <div className="workouts-container">
        {props.workouts.map(workout => {
          return (
            <a href="#" key={workout.id}>
              {workout.name}
            </a>
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
  }
};

export default Workouts;
