const SET_ALBUMS_IMAGES = 'albumsReducer/SET_ALBUMS_IMAGES';

const initialState = {
    albums: [],
}

const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUMS_IMAGES:
            return {
                ...state,
                albums: action.payload,
            }

        default:
            return state
    }
}

export const setAlbums = (payload) => ({type: SET_ALBUMS_IMAGES, payload});

export default albumsReducer;