import React, { PureComponent as Component } from "react";
import Nav from "./Nav";
import firebase from "../firebase";
import uniqid from 'uniqid'

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("exercises");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name
        });
      }
      this.setState({
        exercises: newState
      });
    });
  }

  populateList(){
    return this.state.exercises.map(exercise => {
      return(
        <li key={uniqid()} >{exercise.name}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <Nav address="/#/" />
        <ul>
          {this.populateList()}
        </ul>
      </div>
    );
  }
}
