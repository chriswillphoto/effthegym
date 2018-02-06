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


  addExercise(e) {
    e.preventDefault()
    console.log(e.target.elements)
  }

  addForm(exercise) {
    return (
      <form className="addform" onSubmit={e => this.addExercise(e)}>
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
        <h4>{this.props.workout}</h4>
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
