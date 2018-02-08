import React, {PureComponent as Component} from 'react';
import {exercises} from '../exercises.json';
import Nav from './Nav';
import './Edit.css';

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
          }
        >
          {exercise.info}
        </div>
      );
    });
  }

  resetfields(e) {
    e.target.elements['sets'].value = '';
    e.target.elements['reps'].value = '';
    this.setState({
      showAddForm: false,
      selected: null,
    });
  }

  addExercise(e, exercise) {
    e.preventDefault();
    let exObj = {...exercise};
    exObj.sets = parseInt(e.target.elements['sets'].value, 10);
    exObj.reps = parseInt(e.target.elements['reps'].value, 10);
    this.resetfields(e);
    this.props.addExercise({
      workout_id: this.props.workout,
      info: exObj,
    });
  }

  addForm(exercise) {
    return (
      <form className="addform" onSubmit={e => this.addExercise(e, exercise)}>
        <h4>{exercise.info}</h4>
        <input type="number" name="sets" placeholder="sets" required />
        <input type="number" name="reps" placeholder="reps" required />
        {this.state.extype === 'time' ? (
          <button type="button" value="time" onClick={() => this.setState({extype: 'sets'})}>
            For Time
          </button>
        ) : (
          <button type="button" value="sets" onClick={() => this.setState({extype: 'time'})}>
            For Sets
          </button>
        )}

        <button>Go</button>
      </form>
    );
  }

  render() {
    return (
      <div className={'editor '}>
        <div
          className={'editor-list ' + (this.state.showAddForm ? 'formup' : '')}
          onClick={() => {
            if (this.state.showAddForm) {
              this.setState({showAddForm: false});
            }
          }}
        >
          <Nav address="/#/workouts" />
          {this.exList()}
        </div>
        {this.state.showAddForm && this.addForm(this.state.selected)}
      </div>
    );
  }
}

export default Edit;

// this.props.addExercise({
//              workout_id: this.props.workout, // props.workout is id of currently selected workout
//              info: exercise,
//            })
