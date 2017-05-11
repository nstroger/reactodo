import { createStore, applyMiddleware } from 'redux';
import reducers from './todo-app/reducers';
import thunk from 'redux-thunk';
// import { loadState, saveState } from './localStorage';
// import throttle from 'lodash/throttle';

const configureStore = () => {
  // const persistedState = loadState();
  // const store = createStore(reducers, persistedState);
  const store = createStore(
    reducers,
    applyMiddleware(thunk)
  );

  // store.subscribe(throttle(() => {
  //   saveState({
  //     todos: store.getState().todos
  //   });
  // }, 1000));

  return store;
}

export default configureStore;