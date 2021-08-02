import {userAPI} from "../firebase/api";

const SET_USER = 'user_reducer/SET_USER';
const SET_FETCHING = 'user_reducer/SET_FETCHING';

const initialState = {
    user: null,
    isFetching: false,
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }

        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }

        default:
            return state;
    }
}

export const setCurrentUser = (user) => async (dispatch) => {
    dispatch(setUser(user?.email));
}

export const login = (email, password) => async (dispatch) => {
    dispatch(setFetching(true));
    await userAPI.login(email, password);
    dispatch(setFetching(false));
}

export const logout = () => async (dispatch) => {
    dispatch(setFetching(true));
    await userAPI.logout();
    dispatch(setFetching(false));
}

export const addNewUser = (email, password) => async (dispatch) => {
    dispatch(setFetching(true));
    await userAPI.createNewUser(email, password);
    dispatch(setFetching(false));
}

const setUser = (payload) => ({type: SET_USER, payload});
const setFetching = (payload) => ({type: SET_FETCHING, payload})

export default userReducer;