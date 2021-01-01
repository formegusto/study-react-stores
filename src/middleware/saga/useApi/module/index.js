import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import api from './reducer';
import { postSaga } from './saga';

const rootReducer = combineReducers({
    api
});

export function* rootSaga() {
    yield all([postSaga()])
}

export default rootReducer;