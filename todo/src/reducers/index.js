import { ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions';
const initialState = {
    todo:[
        {value: 'eat breakfast',completed: false},
        {value: 'eat lunch',completed: false},
        {value: 'eat dinner',completed: false}
        ]
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TODO: 
            return{
                ...state,
                todo: [...state.todo , {value: action.payload , completed: false} ]
            }
        case DELETE_TODO: 
        return{
            ...state,
              todo: state.todo.filter((item,index)=> index !== action.payload)
        }
        case TOGGLE_TODO: 
        console.log('TOGGLED')

        return{
        }
        default:
            return state
    }
}

export default reducer;