import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import housesReducer from "./housesReducer";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";


const reducers = combineReducers({
    houses: housesReducer,
    user: userReducer,
    admin: adminReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;