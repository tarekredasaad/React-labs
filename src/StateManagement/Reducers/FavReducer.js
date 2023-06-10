const INITIAL_VALUE = {
    counter: 0,
    flag: true,
    movie:{},
    favouritMovies:[]
}

export default function favReducer(state = INITIAL_VALUE, action){

    switch(action.type){
        case "FAVOURIT_COUNT": 
        if(action.payload.flag){
            
            const exist = state.favouritMovies.some(el => el.id == action.payload.movie.id);
            
            if(!exist){
                state.counter++;
                state.favouritMovies.push(action.payload.movie)
            }
            else{
                alert("already added to favourit")
            }
            
        }
        else {

            if(state.counter > 0){
                state.counter--;
                const index = state.favouritMovies.findIndex(ele => {
                    return ele.id === action.payload.movie.id});
                
                state.favouritMovies.splice(index,1);
            }
            state.flag = action.payload.flag;
        }

        return{
            ...state
        }
        default: 
            return state
    }
}