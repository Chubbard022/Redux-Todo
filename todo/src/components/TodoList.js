import React from 'react';

const TodoList = (props) => {
    console.log("the todoList: ",props.todoArray);
    return (
        <div>
            {console.log(props.todoArray)}
            {props.todoArray.map((item, index) =>
                <div className = 'todoItem' key={index}>{item.value}
                <button className = 'button'>X</button>
                </div>
                )}
        </div>
    )
}

export default TodoList;