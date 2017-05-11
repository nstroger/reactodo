import React from 'react';
import { Route } from 'react-router-dom';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const TodoApp = ({ match }) => (
  <div>
    <h1>Todo App</h1>
    <AddTodo />
    <Route path={`${match.url}/:filter`} component={TodoList} />
    <Route exact path={match.url} component={TodoList} />
    <Footer />
  </div>
)

export default TodoApp