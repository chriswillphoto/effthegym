import React from 'react';
import './AddWorkout.css'
import {connect} from 'react-redux'
import {addWorkout} from '../actions'
import uniqid from 'uniqid'

let AddWorkout = ({dispatch}) => {
  return(
    <form onSubmit={(e) => {
      e.preventDefault()
      dispatch(addWorkout( {id: uniqid(), name: e.target.elements['name'].value, exercises: []   }  ))
      e.target.elements['name'].value = ""
    }}>
      <input name="name" type="text"  placeholder="Workout Name"/>
      <button>Add</button> 
    </form>
  )
}

AddWorkout = connect()(AddWorkout)

export default AddWorkout

