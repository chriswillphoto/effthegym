import React from 'react';
import './Workouts.css';
import _ from 'underscore';


const Workouts = props => {
  if (Object.keys(props.workouts).length > 0) {
  console.log(props)
    return (
      <div className="workouts-container">
      {
        Object.values(props.workouts).map( work => {
          return <a href="#" key={work.id}>{work.name}</a>
        }  )
      } 
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
