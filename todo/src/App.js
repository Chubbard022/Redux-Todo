import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './actions';

import TodoForm from './components/todoForm'
import TodoList from './components/TodoList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2 style={{textAlign:'center'}}>Add a todo to the list</h2>
      <TodoForm addTodo={this.props.addTodo}/>
      <TodoList todoArray={this.props.todoList.todo} deleteTodo={this.props.addTodo}/>
      
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    todoList: state
  }
}

export default connect(mapStateToProps , {addTodo, deleteTodo})(App);
