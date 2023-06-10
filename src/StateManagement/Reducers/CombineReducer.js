import { combineReducers } from "redux";
import favReducer from "./FavReducer";
import MovieReducer from "./MoviesReducer";

export default combineReducers({
    favRed:favReducer,
    movieRed:MovieReducer
})