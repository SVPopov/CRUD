import {call, put, all, takeLatest} from 'redux-saga/effects';
import DepartmentAPI from '../../services/rest-api/DepartmentAPI';
import * as _ from 'lodash';

export function* DepartmentSaga() {
    yield all([
        departmentDataFlow(),
    ]);
}

function* departmentDataFlow() {
    yield takeLatest('DEPARTMENT_LIST_FETCH', getDepartmentList);
}

function* getDepartmentList() {
    try {
        const response = yield call(DepartmentAPI.getDepartmentList);
        const data = _.get(response, 'data', {});
        
        yield put({
            type: 'DEPARTMENT_LIST_FETCH_SUCCESS',
            payload: {
                data: data,
            },
        });
    } catch (error) {
        console.log(error);
        yield put({ type: 'DEPARTMENT_LIST_FETCH_ERROR'});
    }
}