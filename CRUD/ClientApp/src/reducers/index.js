import { combineReducers } from 'redux';
import notificationData from './notificationData';
import userData from './userData';
import departmentData from './departmentData';

const reducers = {
    notificationData,
    userData,
    departmentData,
};

const appReducer = combineReducers(reducers);

const reducersData = (state, action) => {
    if (action.type === 'INIT_APP_STORE') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default reducersData;
