import React, {PureComponent as Component} from 'react';
import Nav from './Nav';
import ReactCountdownClock from 'react-countdown-clock';

class Run extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: this.props.workout,
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

  render() {
    if (this.state.workout.exercises[0].sets) {
      return (
        <div>
          <Nav address="/#/workouts" />
          <h1>Run Coming Soon</h1>
          {this.state.workout.exercises[0] ? (
            <div>
              <h4>{this.state.workout.exercises[0].info}</h4>
              <h3>sets remaining: {this.state.workout.exercises[0].sets} </h3>
              <button onClick={() => this.doneSets()}>Done</button>
            </div>
          ) : (
            <h4> You have finished your workout </h4>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <ReactCountdownClock seconds={this.state.workout.exercises[0].time} />
        </div>
      );
    }
  }
}

export default Run;
