import React from 'react';
import './Workouts.css';

const Workouts = props => {
  if (Object.keys(props.workouts).length > 0) {
    return (
      <div className="workouts-container">
        {Object.values(props.workouts).map(workout => {
          return (
            <button key={workout.id} onClick={() => props.selectWorkout(workout)}>
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
  }
};

export default Workouts;
