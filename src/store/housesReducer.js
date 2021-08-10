import {commonAPI} from '../firebase/api';
import {firestoreCollections} from "../utils/consts";
import {getMinMaxArrValue} from "../utils/helpers";


const HOUSES = firestoreCollections.houses;

const SET_HOUSES = 'houses_reducer/SET_HOUSES';
const SET_FETCHING = 'houses_reducer/SET_FETCHING';
const SET_MIN_MAX_PRICES = 'houses_reducer/SET_MIN_MAX_PRICES';
const SET_MIN_MAX_SQUARES = 'houses_reducer/SET_MIN_MAX_SQUARES';

const initialState = {
    prices: [],
    squares: [],
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

        case SET_MIN_MAX_PRICES:
            return {
                ...state,
                prices: action.payload,
            }

        case SET_MIN_MAX_SQUARES:
            return {
                ...state,
                squares: action.payload,
            }

        default:
            return state;
    }
}

export const getHouses = () => async (dispatch) => {
    const data = await commonAPI.getCollection(HOUSES);

    const minPrice = getMinMaxArrValue(data, 'minPrice', 'min');
    const maxPrice = getMinMaxArrValue(data, 'maxPrice', 'max');
    const minMaxSquare = getMinMaxArrValue(data, 'totalArea', 'all');

    dispatch(setHouses(data));
    dispatch(setMinMaxPrices(([minPrice[0], maxPrice[0]])));
    dispatch(setMinMaxSquares( minMaxSquare));
}

// export const getFilterHouses = (data) => (dispatch) => {
//
// }

export const addUpdateHouse = (file, data, doc) => async (dispatch) => {
    dispatch(setFetching(true));
    await commonAPI.addUpdateDoc(HOUSES, file, data, doc);
    dispatch(setFetching(false));
}

const setHouses = (payload) => ({type: SET_HOUSES, payload});
const setFetching = (payload) => ({type: SET_FETCHING, payload})
const setMinMaxPrices = (payload) => ({type: SET_MIN_MAX_PRICES, payload})
const setMinMaxSquares = (payload) => ({type: SET_MIN_MAX_SQUARES, payload})

export default housesReducer;