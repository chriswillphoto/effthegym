import React, {PureComponent as Component} from 'react';
import Nav from './Nav';
import ReactCountdownClock from 'react-countdown-clock';

class Run extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: this.props.workout,
      pauseTimer: true,
    };
  }

  doneSets() {
    const newWorkout = this.state.workout.exercises.slice(1);
    const newSet = this.state.workout.exercises[0].sets - 1;
    if (newSet === 0) {
      this.setState({
        workout: {...this.state.workout, exercises: newWorkout},
      });
    } else {
      this.setState({
        workout: {
          ...this.state.workout,
          exercises: [
            {...this.state.workout.exercises[0], sets: newSet},
            ...this.state.workout.exercises.slice(1),
          ],
        },
      });
    }
  }

  doneTime() {
    const newWorkout = this.state.workout.exercises.slice(1);
    this.setState({
      workout: {...this.state.workout, exercises: newWorkout},
    });
  }

  render() {
    if (this.state.workout.exercises.length > 0 && this.state.workout.exercises[0].sets) {
      return (
        <div>
          <Nav address="/#/workouts" />
          <h1>Run Coming Soon</h1>
          <h4>{this.state.workout.exercises[0].info}</h4>
          <h3>sets remaining: {this.state.workout.exercises[0].sets} </h3>
          <button onClick={() => this.doneSets()}>Done</button>
        </div>
      );
    } else if (this.state.workout.exercises.length > 0 && this.state.workout.exercises[0].time) {
      return (
        <div>
          <Nav address="/#/workouts" />
          <ReactCountdownClock
            seconds={this.state.workout.exercises[0].time}
            onComplete={() => this.doneTime()}
            paused={this.state.pauseTimer}
          />
          {this.state.pauseTimer ? (
            <button onClick={() => this.setState({pauseTimer: false})}>Go</button>
          ) : (
            <button onClick={() => this.setState({pauseTimer: true})}>Pause</button>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <Nav address="/#/workouts" />
          <h4 className="complete">You have finished your workout!</h4>
        </div>
      );
    }
  }
}

export default Run;
