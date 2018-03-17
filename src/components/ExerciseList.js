import React, { PureComponent as Component } from "react";
import Nav from "./Nav";
import firebase from "../firebase";
import uniqid from "uniqid";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: [],
      loading: true
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("exercises");
    if (!localStorage.getItem("eff-the-gym-exercise-list")) {
      const itemsRef = firebase.database().ref("exercises");
      itemsRef.on("value", snapshot => {
        let items = snapshot.val();
        let newState = [];
        for (let item in items) {
          newState.push({
            id: item,
            name: items[item].name,
            type: items[item].type,
            muscleGroups: items[item].muscleGroups
          });
        }
        this.setState({
          exercises: newState,
          loading: false
        });
        localStorage.setItem("eff-the-gym-exercise-list", JSON.stringify(newState));
      });
    } else {
      this.setState({
        exercises: JSON.parse(localStorage.getItem("eff-the-gym-exercise-list")),
        loading: false
      });
    }
  }

  populateList() {
    return this.state.exercises.map(exercise => {
      return <li key={uniqid()}>{exercise.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <Nav address="/#/" />
        <ul>{this.populateList()}</ul>
        {this.state.loading && <h2>Loading Exercises...</h2>}
      </div>
    );
  }
}
