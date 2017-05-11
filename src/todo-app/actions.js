// import { v4 } from 'uuid';

const API_URL = 'http://localhost:3001/api/todos';

const addTodoRedux = (todo) => ({
  type: 'ADD_TODO',
  text: todo.text,
  id: todo._id,
  completed: todo.complete
})

export const toggleTodoRedux = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodoRedux = (id) => ({
  type: 'DELETE_TODO',
  id
})

export const resetTodos = () => ({
  type: 'RESET_TODOS'
})

export const fetchTodos = (filter = 'all') => dispatch => {
  fetch(`${API_URL}/filter/${filter}`)
    .then(res => res.json())
    .then(
      todos => {
        console.log(todos)
        dispatch(resetTodos())
        todos.forEach(todo => dispatch(addTodoRedux(todo)))
      },
      err => console.log(err)
    )
}

export const addTodo = (text) => dispatch => {
  fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(
      todo => dispatch(addTodoRedux(todo)),
      err => console.log(err)
    )
}

export const toggleTodo = (id) => dispatch => {
  fetch(`${API_URL}/toggle/${id}`, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(
      todo => dispatch(toggleTodoRedux(id)),
      err => console.log(err)
    )
}

export const deleteTodo = (id) => dispatch => {
  fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(
      todo => dispatch(deleteTodoRedux(id)),
      err => console.log(err)
    )
}

// export const setVisibilityFilter = (filter) => ({
//   type: "SET_VISIBILITY_FILTER",
//   filter
// })