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
        console.log(this.state.todoText)
        this.props.addTodo(this.state.todoText)
        this.setState({todoText: ''})
    }
  
    render() {
      return (
        <form style={{textAlign:'center'}}>
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

const mapStateToProps = state =>{
    return{
        todo: state.todo
    }
}


export default connect(mapStateToProps, {addTodo})(TodoForm);