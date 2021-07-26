import {housesAPI} from '../firebase/api';


const SET_HOUSES = 'houses_reducer/SET_HOUSES';
const SET_FETCHING = 'houses_reducer/SET_FETCHING';

const initialState = {
    houses: [],
    isFetching: false,
}

const housesReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_HOUSES:
            return {
                ...state,
                houses: [...action.payload],
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

export const getHouses = () => async (dispatch) => {
    const data = await housesAPI.getHouses();
    dispatch(setHouses(data));
}

// Не знаю, насколько правильно распологать это здесь, потому что я просто буду
// вызывать функцию из api при помощи этой, без использования dispatch
// Оставлю здесь, просто чтобы не 'разбрасывать' функции взаимодействия
export const addUpdateHouse = (data, doc) => async (dispatch) => {
    dispatch(setFetching(true));
    await housesAPI.addUpdateHouse(data, doc);
    dispatch(setFetching(false));
}

const setHouses = (payload) => ({type: SET_HOUSES, payload});
const setFetching = (payload) => ({type: SET_FETCHING})

export default housesReducer;