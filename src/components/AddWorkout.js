import React from 'react';
import './AddWorkout.css'
import {connect} from 'react-redux'
import {addWorkout} from '../actions'
import uniqid from 'uniqid'

let AddWorkout = ({dispatch}) => {
  return(
    <form className="workout-form" onSubmit={(e) => {
      e.preventDefault()
      dispatch(addWorkout( {id: uniqid(), name: e.target.elements['name'].value, exercises: []   }  ))
      e.target.elements['name'].value = ""
    }}>
      <h5>Add New Workout</h5>
      <input name="name" type="text"  placeholder="Workout Name" required/>
      <button>Add</button> 
    </form>
  )
}

AddWorkout = connect()(AddWorkout)

export default AddWorkout

