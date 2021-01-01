import createRequestSaga from './createRequestSaga';
import { GET_POST } from './type';
import * as api from './api';
import { takeEvery, takeLatest } from 'redux-saga/effects';

export const getPost = createRequestSaga(GET_POST, api.getPostAPI);

export function* postSaga() {
    yield takeEvery(GET_POST, getPost);
}