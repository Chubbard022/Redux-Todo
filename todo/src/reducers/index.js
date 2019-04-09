import { ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions';
const initialState = {
    todo:[
        {
            value: 'eat breakfast',
            completed: false
        },
        {
            value: 'eat lunch',
            completed: false
        },
        {
            value: 'eat dinner',
            completed: false
        }
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
              todo: [...state.todo , {value: action.payload ,completed: false}]
        }
        default:
            return state
    }
}

export default reducer;