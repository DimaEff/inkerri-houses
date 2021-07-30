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
                user: [...action.payload],
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

export const login = (email, password) => async (dispatch) => {
    const user = await userAPI.login(email, password);
    dispatch(setUser(user));
}

export const logout = () => async (dispatch) => {
    await userAPI.logout();
    dispatch(setUser(null));
}

export const addNewUser = (email, password) => async (dispatch) => {
    setFetching(true);
    await userAPI.createNewUser(email, password);
    setFetching(false);
}

const setUser = (payload) => ({type: SET_USER, payload});
const setFetching = (payload) => ({type: SET_FETCHING, payload})

export default userReducer;