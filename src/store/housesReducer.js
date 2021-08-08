import {commonAPI} from '../firebase/api';
import {firestoreCollections} from "../utils/consts";


const HOUSES     = firestoreCollections.houses;

const SET_HOUSES = 'houses_reducer/SET_HOUSES';
const SET_FETCHING = 'houses_reducer/SET_FETCHING';

const initialState = {
    houses: [
        {
            title: 'Олонец 81',
            usableArea: '81,12',
            totalArea: '83,09',
            dimensions: [12, 8.3],
            floors: '1',
            minPrice: 3240000,
            maxPrice: 3700000,
            imagesURL: ['https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607'],
            bedRooms: 2,
            bathRooms: 2,
        },
        {
            title: 'Клязьминский парк 146',
            usableArea: '81,12',
            totalArea: '83,09',
            dimensions: [12, 8.3],
            floors: '2',
            minPrice: 3240000,
            maxPrice: 3700000,
            imagesURL: ['https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607'],
            bedRooms: 2,
            bathRooms: 2,
        },
        {
            title: 'Гольфстрим 127',
            usableArea: '81,12',
            totalArea: '83,09',
            dimensions: [12, 8.3],
            floors: '1.5',
            minPrice: 3240000,
            maxPrice: 3700000,
            imagesURL: ['https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607'],
            bedRooms: 2,
            bathRooms: 2,
        },
    ],
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