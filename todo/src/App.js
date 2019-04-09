import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './actions';

import TodoForm from './components/todoForm'
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  deltePost = id =>{
    console.log(id)
   
  }
  
  render() {
    return (
      <div className="App">
      <h2 style={{textAlign:'center'}}>Add a todo to the list</h2>
      <TodoForm addTodo={this.props.addTodo}/>
      <TodoList toggleTodo={this.props.toggleTodo} todoArray={this.props.todoList.todo} deltePost={this.deltePost}/>
      
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    todoList: state
  }
}

export default connect(mapStateToProps , {addTodo, deleteTodo, toggleTodo})(App);
