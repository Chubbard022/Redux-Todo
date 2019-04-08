
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
    console.log(action)
    switch(action.type){
        default:
            return state
    }
}

export default reducer;