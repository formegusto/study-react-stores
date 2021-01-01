import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter from './reducer';
import { counterSaga } from './saga';

const rootReducer = combineReducers({
    counter
})

export function* rootSaga() {
    yield all([counterSaga()]);
}

export default rootReducer;