import { ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions';
const initialState = {
    todo:[]
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TODO: 
            return{
                ...state,
                todo: [...state.todo , {value: action.payload , completed: false, id: Date.now()} ]
            }
        case DELETE_TODO: 
            return state.todo.filter((todo)=> todo !== action.payload)
        case TOGGLE_TODO: 
            return{
                ...state,
                todo: state.todo.map((todo)=>{
                    if(todo === action.payload){
                        return{
                            ...todo,
                            completed: !todo.completed
                        }
                    }else{
                        return todo
                    }
                })
            }
        default:
            return state
    }
}

export default reducer;

