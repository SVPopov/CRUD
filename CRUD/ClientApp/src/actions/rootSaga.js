import { all } from 'redux-saga/effects';
import { UserSaga } from './user/UserSaga';
import { DepartmentSaga } from './department/DepartmentSaga';

export default function* rootSaga() {
    yield all([
        UserSaga(),
        DepartmentSaga(),
    ]);
}
