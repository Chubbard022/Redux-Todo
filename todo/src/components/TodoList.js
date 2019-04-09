import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../actions';

class TodoList extends React.Component {
    render(){
    return (
        <div>
            {this.props.todoList.todo.map((item,index) => 
                <div 
                onClick={()=>this.props.toggleTodo(item)}
                style={{textDecoration: item.completed ? 'line-through' : 'none'}}
                className = 'todoItem' 
                key={index}
                >{item.value}
                <button className='button' onClick={()=>this.props.deleteTodo()}>Delete</button>
            </div>
                
                
            )}
        </div>
    )
  }
}

const mapStateToProps = state =>{
    return{
      todoList: state
    }
  }
  
  export default connect(mapStateToProps , {addTodo, deleteTodo, toggleTodo})(TodoList);
