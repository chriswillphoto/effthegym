import React, { PureComponent as Component } from "react";
import ExerciseInfo from "./ExerciseInfo";
import uniqid from "uniqid";

export default class Workout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false
    };
  }

  render() {
    const workout = this.props.workout;
    return (
      <div
        className="workout-container"
        key={workout.id}
        onClick={() => this.props.select(workout.id)}
      >
        <div className="workout-buttons">
          <h4>{workout.name}</h4>
          <button className="info" onClick={() => this.setState({showInfo: !this.state.showInfo})}>{this.state.showInfo ? "Hide Info" : "Show Info"}</button>

          {this.state.showInfo && workout.exercises.length === 0 && <h6>You haven't added any exercises to this workout</h6>}

          {this.state.showInfo && (
            <ol className={"exercise-container" + (workout.exercises.length === 0 ? " empty" : "")}>
              {workout.exercises.map(exercise => {
                return (
                  <ExerciseInfo
                    key={uniqid()}
                    delete={() => this.props.delExercise(exercise, workout.id)}
                    exercise={exercise}
                  />
                );
              })}
            </ol>
          )}
          <a
            className="go-button"
            href="/#/workout/run"
            onClick={() => this.props.select(workout.id)}
          >
            Go
          </a>
          <a href="/#/workout/edit" onClick={() => this.props.select(workout.id)}>
            Add Exercises to this Workout
          </a>
          <button className="delete-workout"  onClick={() => this.props.deleteWorkout(workout)}>Delete this Workout</button>
        </div>
      </div>
    );
  }
}
