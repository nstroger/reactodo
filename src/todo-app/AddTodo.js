import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

let inputStyle = {
  marginRight: 10,
  minWidth: 300
}

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <form className="form-inline">
      <div className="form-group">
        <input type="text" className="form-control" style={inputStyle} placeholder="Todo Text" ref={node => {
          input = node
        }} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={() => {
        if (input.value) {
          dispatch(addTodo(input.value))
        }
      }}>
        Add Todo
      </button>
    </form>
  )
}

export default connect()(AddTodo)
