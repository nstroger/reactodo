import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { toggleTodo, fetchTodos, deleteTodo } from './actions';

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

class Todo extends React.Component {
  render() {
    let { onClick, completed, text, onDelete, id } = this.props;
    return (
      <li
        className="list-group-item"
        onClick={onClick}
        style={{
          textDecoration:
            completed ?
              'line-through':
              'none',
          color:
            completed ?
              'black':
              'blue',
          height: 56,
          verticalAlign: 'middle',
          lineHeight: '36px',
          cursor: 'pointer'
        }}
      >
        {text}
        <button className="btn btn-danger right" style={{float: 'right'}}
          onClick={ e => {
            e.stopPropagation();
            onDelete(id)
          }}>
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </button>
      </li>
    )
  }
}

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
    let { todos, onTodoClick, onDelete } = this.props;
    return (
      <ul className="list-group" style={{marginTop: '20px'}}>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            style={{
              color: 'black'
            }}
            onClick={() => onTodoClick(todo.id)}
            onDelete={(id) => onDelete(id)}
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
  getTodoList: () => dispatch(fetchTodos(ownProps.match.params.filter)),
  onDelete: (id) => {
    dispatch(deleteTodo(id))
  }
})

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default withRouter(TodoListContainer)