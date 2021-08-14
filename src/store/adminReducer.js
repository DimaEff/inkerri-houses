const SET_IS_OPEN_DIALOG_CONTENT = 'admin_reducer/SET_IS_OPEN_DIALOG_CONTENT';
const SET_DIALOG_CONTENT = 'admin_reducer/SET_DIALOG_CONTENT';
const SET_DEFAULT_VALUES = 'admin_reducer/SET_DEFAULT_VALUES';

const initialState = {
    isOpenDialogContent: false,
    DialogContent: null,
    defaultValues: null,
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOG_CONTENT:
            return {
                ...state,
                DialogContent: action.payload,
            }

        case SET_IS_OPEN_DIALOG_CONTENT:
            return {
                ...state,
                isOpenDialogContent: action.payload,
            }

        case SET_DEFAULT_VALUES:
            return {
                ...state,
                defaultValues: action.payload,
            }

        default:
            return state
    }
}

export const openCloseAdminDialogContent = (isOpen, content, defaultValues) => (dispatch) => {
    dispatch(setDialogContent(content));
    dispatch(setDefaultValues(defaultValues));
    dispatch(setOpenDialogContent(isOpen));
}

const setDialogContent = (payload) => ({type: SET_DIALOG_CONTENT, payload});
const setOpenDialogContent = (payload) => ({type: SET_IS_OPEN_DIALOG_CONTENT, payload});
const setDefaultValues = (payload) => ({type: SET_DEFAULT_VALUES, payload});

export default adminReducer;