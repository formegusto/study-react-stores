import { call, put } from "redux-saga/effects";

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        console.log(action);
        try {
            const response = yield call(request, action.payload);
            yield put({
                type:SUCCESS,
                payload: response.data 
            });
        } catch(e) {
            yield put({
                type:FAILURE,
                payload: e
            });
        }
    }
}