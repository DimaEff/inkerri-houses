import {commonAPI} from '../firebase/api';
import {firestoreCollections} from "../utils/consts";


const HOUSES = firestoreCollections.houses;

// Ну вот я не знаю, редьюсеры(news, houses) очень похожи, но стоит ли
// обобщать их в один
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
    const data = await commonAPI.getCollection(HOUSES);
    dispatch(setHouses(data));
}

export const addUpdateHouse = (file, data, doc) => async (dispatch) => {
    dispatch(setFetching(true));
    await commonAPI.addUpdateDoc(HOUSES, file, data, doc);
    dispatch(setFetching(false));
}

const setHouses = (payload) => ({type: SET_HOUSES, payload});
const setFetching = (payload) => ({type: SET_FETCHING, payload})

export default housesReducer;