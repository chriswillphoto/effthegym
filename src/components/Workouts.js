import React from "react";
import AddWorkout from "./AddWorkout";
import "./Workouts.css";
import Nav from "./Nav";
import ExerciseInfo from "./ExerciseInfo";
import uniqid from "uniqid";
import Workout from './Workout'

const Workouts = props => {
  const workoutlist = Object.keys(props.workouts);
  const listRender = function(prop) {
    return Object.values(prop).map(workout => {
      return <Workout key={uniqid()} deleteWorkout={props.deleteWorkout} workout={workout} select={props.selectWorkout} delExercise={props.delExercise}/>
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
