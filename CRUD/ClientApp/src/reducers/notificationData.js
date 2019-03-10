const initialState = {
    profile: {}
};

const notificationData = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTIFY_SUCCESS':
            return {
                ...state,
                notification: {
                    message: action.payload.data,
                    type: 'success'
                },
            };
        case 'NOTIFY_ERROR':
            return {
                ...state,
                notification: {
                    message: action.payload.data,
                    type: 'error'
                },
            };
        default:
            return state
    }
};

export default notificationData;
