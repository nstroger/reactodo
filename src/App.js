import React, { Component } from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { TodoApp } from './todo-app/TodoApp';
import configureStore from './configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <TodoApp />
        </div>
      </Provider>
    );
  }
}

export default App;
