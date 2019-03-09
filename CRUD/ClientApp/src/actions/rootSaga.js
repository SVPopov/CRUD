import { all } from 'redux-saga/effects';
import { UserSaga } from './user/UserSaga';

export default function* rootSaga() {
    yield all([
        UserSaga(),
    ]);
}
