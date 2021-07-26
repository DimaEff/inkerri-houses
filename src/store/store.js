import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import housesReducer from "./housesReducer";

const reducers = combineReducers({
    houses: housesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;