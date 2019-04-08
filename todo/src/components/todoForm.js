import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';


class TodoForm extends React.Component {
    state = {
      todoText: ''
    };

    handleInput = event =>{
        this.setState({[event.target.name]: event.target.value})
    }
    addNewTodo = event =>{
        event.preventDefault();
        console.log('clicked')
    }
  
    render() {
      return (
        <form>
          <input 
            type="text"
            placeholder="Todo...."
            name='todoText'
            value={this.state.todoText}
            onChange={this.handleInput}
          />
          <button onClick={this.addNewTodo}>Add Todo</button>
        </form>
      )
    }
  }
export default TodoForm;