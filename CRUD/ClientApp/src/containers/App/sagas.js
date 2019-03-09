import { takeLatest, call, put } from 'redux-saga/effects';

import { getAPIDataLoaded, getAPIDataError } from './actions';

import {
  GET_API_DATA,
} from './constants';

/*
  Data downloading using pure JS fetch
  @type: JS object
  { result: resultObj, error: errorObj }
*/
const fetchData = (url, options) => {
    const fetchRequest = new Request(`${process.env.REACT_APP_API_URL}api/v1/${url}`, {
        method: 'GET',
        credentials: `${process.env.REACT_APP_API_CREDENTIALS}`,
        ...options
    });
  return fetch(fetchRequest)
    .then((response) => (
      response.json().then((result) => ({ result }))
    ))
    .catch((error) => ({ error }));
};

function* getApiData() {
    const { result, error } = yield call(fetchData, 'profile', { method: 'get' });

    if (result) {
        yield put(getAPIDataLoaded(result));
    } else {
        yield put(getAPIDataError(error));
    }
}

function* apiData() {
  yield takeLatest(GET_API_DATA, getApiData);
}

export default apiData;
