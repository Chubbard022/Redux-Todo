import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';


class TodoList extends React.Component{
    state = {};
  
    
      render() {
        return (
          <h5 style={{textAlign:'center'}}>todo's will show here</h5>
        )
      }
}

export default TodoList;