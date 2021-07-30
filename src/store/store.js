import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import housesReducer from "./housesReducer";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({
    houses: housesReducer,
    news: newsReducer,
    user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;