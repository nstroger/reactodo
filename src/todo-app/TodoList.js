import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { toggleTodo } from './actions';

const getVisibleTodos = (
  todos,
  filter
) => {
  console.log(filter);
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through':
          'none'
    }}
  >
    {text}
  </li>
)

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        style={{
          color: 'black'
        }}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(
    state.todos,
    match.params.filter
  )
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
})

const TodoListContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList))

export default TodoListContainer