const initialState = {
    profile: {}
};

const departmentData = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPARTMENT_LIST_FETCH_SUCCESS':
            return {
                ...state,
                departments: action.payload.data
            };
        case 'DEPARTMENT_LIST_FETCH_ERROR':
            return  {
                ...state,
            };
        default:
            return state
    }
};

export default departmentData;
