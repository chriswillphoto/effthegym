import React, {PureComponent as Component} from "react";
import AddWorkout from "./AddWorkout";
import "./Workouts.css";
import Nav from "./Nav";
import uniqid from "uniqid";
import Workout from './Workout'

class Workouts extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchWorkouts()
  }

  workoutlistLength(){ return Object.keys(this.props.workouts).length; }

  listRender(prop) { 
    return Object.values(prop).map(workout => {
      return <Workout key={uniqid()} deleteWorkout={this.props.deleteWorkout} workout={workout} select={this.props.selectWorkout} delExercise={this.props.delExercise}/>
    });
  };

  render() {
    return (
      <div className="workouts-container">
        <Nav address="/#/" />
        {this.workoutlistLength() === 0 && (
          <h2 className="empty-header">
            You Haven't Created Any Workouts! Add One Below.
          </h2>
        )}
        {this.workoutlistLength() > 0 && this.listRender(this.props.workouts)}
        <AddWorkout />
      </div>
    );
  };
}

export default Workouts;
