import React from 'react';
import exercises from '../exercises.json';

const Edit = props => {
  const exList = () => {
    return Array.from(exercises.exercises).map(exercise => {
      return (
        <div
          onClick={() => props.addExercise({
            workout_id: props.workout.id,
            info: exercise,
          })}
        >exercise.info</div>
      );
    });
  };
  console.log(exercises.exercises)
  return (
    <div className="editor">
    <h4>{props.workout.name}</h4>
    {exList()}
    </div>
  );
};

export default Edit;
