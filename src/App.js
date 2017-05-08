import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todos">TodoApp</Link></li>
              </ul>
              <Route exact path="/" component={() => (
                <h3>Home Page</h3>
              )} />
              <Route path="/todos" component={TodoApp} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
