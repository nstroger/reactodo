import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { toggleTodo, fetchTodos } from './actions';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    default:
      return todos
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

class TodoList extends React.Component {
  componentDidMount () {
    this.routeChanged()
  }

  componentDidUpdate (prevProps) {
    let { location: { pathname } } = this.props

    if (prevProps.location.pathname === pathname) return
    this.routeChanged()
  }

  routeChanged () {
    this.props.getTodoList();
  }

  render() {
    let { todos, onTodoClick } = this.props;
    return (
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
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.match.params.filter)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
  getTodoList: () => dispatch(fetchTodos(ownProps.match.params.filter))
})

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default withRouter(TodoListContainer)