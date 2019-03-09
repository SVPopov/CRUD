import {call, put, all, takeLatest} from 'redux-saga/effects';
import UserAPI from '../../services/rest-api/UserAPI';
import * as _ from 'lodash';

export function* UserSaga() {
    yield all([
        userDataFlow(),
    ]);
}

function* userDataFlow() {
    yield takeLatest('USER_LIST_FETCH', getUserList);
    yield takeLatest('USER_DATA_CREATE', createUser);
    yield takeLatest('USER_DATA_EDIT', editUser);
    yield takeLatest('USER_DATA_DELETE', deleteUser);
}

function* getUserList() {
    try {
        const response = yield call(UserAPI.getSwimmerList);
        const data = _.get(response, 'data.entity', {});


        yield put({
            type: 'USER_LIST_FETCH_SUCCESS',
            payload: {
                data: data,
            },
        });
    } catch (error) {
        console.log(error);
        yield put({type: 'USER_LIST_FETCH_ERROR'});
    }
}

function* createUser(action) {
    try {
        const response = yield call(UserAPI.createSwimmerData, action.payload);
        const id = _.get(response, 'data.entity.Id', {});
        const code = _.get(response, 'data.code', {});
        const message = _.get(response, 'data.message', {});
        switch (code) {
            case 201:
                action.payload.Id = id;
                yield put({
                    type: 'USER_DATA_CREATE_SUCCESS',
                    payload: {
                        data: {
                            ...action.payload
                        }
                    },
                });
                yield put({
                    type: 'NOTIFY_SUCCESS',
                    payload: {
                        data: message,
                    }
                });
                break;
            default:
                yield put({type: 'USER_DATA_CREATE_ERROR'});
                yield put({
                    type: 'NOTIFY_ERROR',
                    payload: {
                        data: message,
                    }
                });
        }
    } catch (error) {
        console.log(error);
        yield put({type: 'USER_DATA_CREATE_ERROR'});
    }
}

function* editUser(action) {
    try {
        const response = yield call(UserAPI.editSwimmerData, action.payload);
        const code = _.get(response, 'data.code', {});
        const message = _.get(response, 'data.message', {});

        switch (code) {
            case 201:
                yield put({
                    type: 'USER_DATA_EDIT_SUCCESS',
                    payload: {
                        data: action.payload,
                    },
                });
                yield put({
                    type: 'NOTIFY_SUCCESS',
                    payload: {
                        data: message,
                    }
                });
                break;
            default:
                yield put({ type: 'USER_DATA_EDIT_ERROR' });
                yield put({
                    type: 'NOTIFY_ERROR',
                    payload: {
                        data: message,
                    }
                });
        }
    } catch (error) {
        console.log(error);
        yield put({ type: 'USER_DATA_EDIT_ERROR' });
        yield put({
            type: 'NOTIFY_ERROR',
            payload: {
                data: 'Internal error',
            }
        });
    }
}

function* deleteUser(action) {
    try {
        yield call(UserAPI.deleteSwimmer, action.payload);

        yield put({
            type: 'USER_DATA_DELETE_SUCCESS',
            payload: {
                data: action.payload,
            },
        });
    } catch (error) {
        console.log(error);
        yield put({ type: 'USER_DATA_DELETE_ERROR'});
    }
}
