import React from 'react'

const Workout = (props) => {
  return(
    <div key={props.workout.id} onClick={() => props.selectWorkout(workout.id)}>
          <h4>{workout.name}</h4>
          {workout.exercises.map(exercise => {
            return (
              <div key={exercise.id} className="exercise-container">
                <h4>{exercise.info}</h4>
                <h6>sets: {exercise.sets}</h6>
              </div>
            );
          })}
          <a
            href="/#/workout/edit"
            onClick={() => props.selectWorkout(workout.id)}>
            Edit
          </a>
        </div>
  )
}
