import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            {props.todoArray.map((item, index) =>
                <div 
                    // onClick={()=>props.toggleTodo(item)}
                    className = 'todoItem' 
                    key={index}
                    >{item.value}

                <button className='button' onClick={()=>props.deltePost(index)}>X</button>
                </div>
                )}
        </div>
    )
}

export default TodoList;