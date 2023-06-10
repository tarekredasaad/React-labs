import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import favReducer from "./Reducers/FavReducer";
import combineReducers from "./Reducers/CombineReducer";

import thunk from "redux-thunk";

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)) )

export default store