import React, { PureComponent as Component } from "react";
import Nav from "./Nav";
import ReactCountdownClock from "react-countdown-clock";
import './Run.css'

class Run extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: this.props.workout,
      pauseTimer: true
    };
  }

  doneSets() {
    const newWorkout = this.state.workout.exercises.slice(1);
    const newSet = this.state.workout.exercises[0].sets - 1;
    if (newSet === 0) {
      this.setState({
        workout: { ...this.state.workout, exercises: newWorkout }
      });
    } else {
      this.setState({
        workout: {
          ...this.state.workout,
          exercises: [
            { ...this.state.workout.exercises[0], sets: newSet },
            ...this.state.workout.exercises.slice(1)
          ]
        }
      });
    }
  }

  doneTime() {
    const newWorkout = this.state.workout.exercises.slice(1);
    this.setState({
      workout: { ...this.state.workout, exercises: newWorkout }
    });
  }

  render() {
    if (this.state.workout.exercises.length > 0 && this.state.workout.exercises[0].sets) {
      return (
        <div className="run-container">
          <Nav address="/#/workouts" />
          <h2>{this.state.workout.exercises[0].name}</h2>
          <h3>sets remaining:  </h3>
          <h2> {this.state.workout.exercises[0].sets} </h2>
          <button onClick={() => this.doneSets()}>Done</button>
        </div>
      );
    } else if (this.state.workout.exercises.length > 0 && this.state.workout.exercises[0].time) {
      return (
        <div className="run-container">
          <Nav address="/#/workouts" />
          <h2>{this.state.workout.exercises[0].name}</h2>
          <ReactCountdownClock
            seconds={this.state.workout.exercises[0].time}
            onComplete={() => this.doneTime()}
            paused={this.state.pauseTimer}
          />
          {this.state.pauseTimer ? (
            <button onClick={() => this.setState({ pauseTimer: false })}>Go</button>
          ) : (
            <button onClick={() => this.setState({ pauseTimer: true })}>Pause</button>
          )}
        </div>
      );
    } else {
      return (
        <div className="run-container">
          <Nav address="/#/workouts" />
          <h4 className="complete">You have finished your workout!</h4>
        </div>
      );
    }
  }
}

export default Run;
