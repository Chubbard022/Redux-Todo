import React, { Component } from 'react';

import TodoForm from './components/todoForm'
import TodoList from './components/TodoList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2 style={{textAlign:'center'}}>Add a todo to the list</h2>
      <TodoForm />
      <TodoList />
      </div>
    );
  }
}

export default App;
