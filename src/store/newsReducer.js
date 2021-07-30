import {commonAPI} from '../firebase/api';
import {NEWS} from "../firebase/collections";


// Ну вот я не знаю, редьюсеры(news, houses) очень похожи, но стоит ли
// обобщать их в один
const SET_NEWS = 'news_reducer/SET_NEWS';
const SET_FETCHING = 'news_reducer/SET_FETCHING';

const initialState = {
    news: [],
    isFetching: false,
}

const newsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...action.payload],
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

export const getNews = () => async (dispatch) => {
    const data = await commonAPI.getCollection(NEWS);
    dispatch(setNews(data));
}

export const addUpdateNewsItem = (file, data, doc) => async (dispatch) => {
    dispatch(setFetching(true));
    await commonAPI.addUpdateDoc(NEWS, file, data, doc);
    dispatch(setFetching(false));
}

const setNews = (payload) => ({type: SET_NEWS, payload});
const setFetching = (payload) => ({type: SET_FETCHING, payload})

export default newsReducer;