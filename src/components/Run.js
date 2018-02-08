import React, {PureComponent as Component} from 'react';
import Nav from './Nav';

class Run extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: this.props.workout,
    };
  }

  done() {
    const newWorkout = this.state.workout.exercises.slice(1);
    this.setState({
      workout: {...this.state.workout, exercises: newWorkout},
    });
  }

  render() {
    return (
      <div>
        <Nav address="/#/workouts" />
        <h1>Run Coming Soon</h1>
        <h4>{this.state.workout.exercises[0].info}</h4>
        <button onClick={() => this.done()}>Done</button>
      </div>
    );
  }
}

export default Run;
