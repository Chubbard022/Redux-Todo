import React from 'react';



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
    deltePost = (index)=>{

    }
  
    render() {
      return (
        <form className='todoForm' style={{textAlign:'center'}}>
          <input 
          className = 'formBoxes'
            type="text"
            placeholder="Todo...."
            name='todoText'
            value={this.state.todoText}
            onChange={this.handleInput}
          />
          <button className = 'formBoxes' onClick={this.addNewTodo}>Add Todo</button>
        </form>
      )
    }
  }

export default TodoForm;