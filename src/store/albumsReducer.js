const SET_BANNERS_IMAGES = 'bannersReducer/SET_BANNERS_IMAGES';

const initialState = {
    albums: [],
}

const bannersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BANNERS_IMAGES:
            return {
                ...state,
                banners: action.payload,
            }

        default:
            return state
    }
}

export const setBanners = (payload) => ({type: SET_BANNERS_IMAGES, payload});

export default bannersReducer;