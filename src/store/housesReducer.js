import {commonAPI} from '../firebase/api';
import {firestoreCollections} from "../utils/consts";
import {getMinMaxArrValue} from "../utils/helpers";


const HOUSES = firestoreCollections.houses;

const SET_HOUSES = 'houses_reducer/SET_HOUSES';
const SET_MIN_MAX_PRICES = 'houses_reducer/SET_MIN_MAX_PRICES';
const SET_MIN_MAX_SQUARES = 'houses_reducer/SET_MIN_MAX_SQUARES';
const SET_FILTER_VALUES = 'houses_reducer/SET_FILTER_VALUES';

const initialState = {
    prices: [],
    squares: [],
    houses: [],
    filterValues: null,
}

const housesReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_HOUSES:
            return {
                ...state,
                houses: [...action.payload],
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

        case SET_FILTER_VALUES:
            return {
                ...state,
                filterValues: action.payload,
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

export const setFilterHousesValues = (filterValues) => (dispatch) => {
    dispatch(setFilterValues(filterValues));
}

const setHouses = (payload) => ({type: SET_HOUSES, payload});
const setMinMaxPrices = (payload) => ({type: SET_MIN_MAX_PRICES, payload})
const setMinMaxSquares = (payload) => ({type: SET_MIN_MAX_SQUARES, payload})
const setFilterValues = (payload) => ({type: SET_FILTER_VALUES, payload})

export default housesReducer;