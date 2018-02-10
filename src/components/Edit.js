import React, { PureComponent as Component } from "react";
// import { exercises } from "../exercises.json";
import firebase from "../firebase";
import Nav from "./Nav";
import "./Edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddForm: false,
      selected: null,
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
          name: items[item].name,
          type: items[item].type
        });
      }
      this.setState({
        exercises: newState
      });
    });
  }

  exList() {
    return Array.from(this.state.exercises).map(exercise => {
      return (
        <div
          className="edit-exercise"
          key={exercise.id}
          onClick={() =>
            this.setState({
              selected: exercise,
              extype: exercise.type,
              showAddForm: true
            })
          }
        >
          <h3>{exercise.name}</h3>
          <button
            onClick={() =>
              this.setState({
                selected: exercise,
                extype: exercise.type,
                showAddForm: true
              })
            }
          >
            Add to Workout
          </button>
        </div>
      );
    });
  }

  resetfields(e) {
    if (this.state.extype === "sets") {
      e.target.elements["sets"].value = "";
      e.target.elements["reps"].value = "";
    } else {
      e.target.elements["time"].value = "";
    }
    this.setState({
      showAddForm: false,
      selected: null
    });
  }

  addExercise(e, exercise) {
    e.preventDefault();
    let exObj = { ...exercise };
    if (this.state.extype === "sets") {
      exObj.sets = parseInt(e.target.elements["sets"].value, 10);
      exObj.reps = parseInt(e.target.elements["reps"].value, 10);
    } else {
      exObj.time = parseInt(e.target.elements["time"].value, 10);
    }
    this.resetfields(e);
    this.props.addExercise({
      workout_id: this.props.workout,
      info: exObj
    });
  }

  addForm(exercise) {
    return (
      <form className="addform" onSubmit={e => this.addExercise(e, exercise)}>
        <h4>{exercise.name}</h4>
        {this.state.extype === "time" ? (
          <div className="time-form">
            <button type="button" value="time" onClick={() => this.setState({ extype: "sets" })}>
              For Time
            </button>
            <input type="number" name="time" placeholder="seconds" required />
          </div>
        ) : (
          <div className="sets-form">
            <button type="button" value="sets" onClick={() => this.setState({ extype: "time" })}>
              For Sets
            </button>
            <input type="number" name="sets" placeholder="sets" required />
            <input type="number" name="reps" placeholder="reps" required />
          </div>
        )}

        <button>Add</button>
      </form>
    );
  }

  render() {
    return (
      <div className={"editor "}>
        <div
          className={"editor-list " + (this.state.showAddForm ? "formup" : "")}
          onClick={() => {
            if (this.state.showAddForm) {
              this.setState({ showAddForm: false });
            }
          }}
        >
          <Nav address="/#/workouts" />
          {this.exList()}
        </div>
        {this.state.showAddForm && this.addForm(this.state.selected)}
      </div>
    )
  }
}

export default Edit;
