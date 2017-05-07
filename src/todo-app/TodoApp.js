import React from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

export const TodoApp = (props) => (
  <div>
    <h1>Todo App</h1>
    <AddTodo />
    <TodoList style={{
      width: 300
    }} />
    <Footer />
  </div>
)