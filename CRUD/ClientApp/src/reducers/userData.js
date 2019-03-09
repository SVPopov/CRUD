const initialState = {
    profile: {}
};

const userData = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LIST_FETCH_SUCCESS':
            return {
                ...state,
            };
        case 'USER_LIST_FETCH_ERROR':
            return  {
                ...state,
            };
        case 'USER_DATA_CREATE_SUCCESS':
            return {
                ...state,
            };
        case 'USER_DATA_EDIT_SUCCESS':
            return {
                ...state,
            };
        case 'USER_DATA_DELETE_SUCCESS':
            return{
                ...state,
            };
        default:
            return state
    }
};

export default userData;
