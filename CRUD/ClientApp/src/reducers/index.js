import { combineReducers } from 'redux';
import userData from './userData';

const reducers = {
    userData,
};

const appReducer = combineReducers(reducers);

const reducersData = (state, action) => {
    if (action.type === 'INIT_APP_STORE') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default reducersData;
