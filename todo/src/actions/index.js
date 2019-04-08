export default ADD_TODO = "ADD_TODO";

export const addTodo = todo =>{
    return{
        type: ADD_TODO,
        payload: todo
    }
}

export default DELETE_TODO = "DELETE_TODO";

export const delteTodo = todo =>{
    return{
        type: DELETE_TODO,
        payload: todo
    }
}
