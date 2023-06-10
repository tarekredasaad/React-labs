const INITIAL_VALUE = {
    list:[]
}

export default function MovieReducer(state = INITIAL_VALUE, action){

    switch(action.type){
        case "GET_MOVIES_LIST": 
        return{
            ...state,
            list: action.payload
        }
        default: 
            return state
    }
}