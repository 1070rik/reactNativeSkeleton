import CounterSaga from './CounterSaga';

import {all} from 'redux-saga/effects';
import apiSaga from './ApiSaga';

function* rootSaga() {
  yield all([CounterSaga(), apiSaga()]);
}

export default rootSaga;
