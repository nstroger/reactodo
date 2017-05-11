export const todos = (state = [], action) => {
  console.log(action);
  console.log(state);
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      });
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'RESET_TODOS':
      return [];
    default:
      return state;
  }
}