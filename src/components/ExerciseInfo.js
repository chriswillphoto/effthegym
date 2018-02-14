import React from "react";

const ExerciseInfo = props => {
  if (props.exercise.sets) {
    return (
      <div>
        <h4>{props.exercise.name}</h4>
        <h6>Sets: {props.exercise.sets}</h6>
        <h6>Reps: {props.exercise.reps}</h6>
        <button onClick={() => props.delete()}>X</button>
      </div>
    );
  } else {
    return (
      <div>
        <h4>{props.exercise.name}</h4>
        <h6>Time: {props.exercise.time} seconds</h6>
        <button onClick={() => props.delete()}>X</button>
      </div>
    );
  }
};

export default ExerciseInfo;