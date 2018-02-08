import React, {PureComponent as Component} from 'react';
import {exercises} from '../exercises.json';
import Nav from './Nav';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddForm: false,
      selected: null,
    };
  }

  exList() {
    return Array.from(exercises).map(exercise => {
      return (
        <div
          className="edit-exercise"
          key={exercise.id}
          onClick={() =>
            this.setState({
              selected: exercise,
              showAddForm: true,
            })
          }>
          {exercise.info}
        </div>
      );
    });
  }

  resetfields(e){
    e.target.elements['sets'].value = ""
    e.target.elements['reps'].value = ""
    this.setState({
      showAddForm: false,
      selected: null
    })
  }

  addExercise(e, exercise) {
    e.preventDefault()
    let exObj = {...exercise}
    exObj.sets = parseInt(e.target.elements['sets'].value)
    exObj.reps = parseInt(e.target.elements['reps'].value)
    this.resetfields(e)
    this.props.addExercise({
      workout_id: this.props.workout,
      info: exObj
    })
  }

  addForm(exercise) {
    return (
      <form className="addform" onSubmit={e => this.addExercise(e, exercise)}>
        <h4>{exercise.info}</h4>
        <input type="number" name="sets" placeholder="sets" required/>
        <input type="number" name="reps" placeholder="reps" required/>
        <button>Go</button>
      </form>
    );
  }

  render() {
    return (
      <div className="editor">
        <Nav address="/#/workouts" />
        {this.state.showAddForm && this.addForm(this.state.selected)}
        {this.exList()}
      </div>
    );
  }
}

export default Edit;

// this.props.addExercise({
//              workout_id: this.props.workout, // props.workout is id of currently selected workout
//              info: exercise,
//            })
