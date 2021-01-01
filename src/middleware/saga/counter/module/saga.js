import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { decrease, increase } from './action';
import { DECREASE_ASYNC, INCREASE_ASYNC } from './type';

function* increaseSaga() {
    yield delay(1000);
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}