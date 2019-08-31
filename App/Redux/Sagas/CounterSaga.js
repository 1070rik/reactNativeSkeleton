import {takeLatest, put} from 'redux-saga/effects';
import {
  DECREMENTING_COUNT,
  DECREMENTING_COUNT_DONE,
  INCREMENTING_COUNT,
  INCREMENTING_COUNT_DONE,
} from '../constants';

function* incrementCount(action) {
  try {
    yield put({type: INCREMENTING_COUNT_DONE, value: 1});
  } catch (e) {
    console.error(e);
  }
}

function* decrementCount(action) {
  try {
    yield put({type: DECREMENTING_COUNT_DONE, value: 1});
  } catch (e) {
    console.error(e);
  }
}

function* counterSaga() {
  yield takeLatest(INCREMENTING_COUNT, incrementCount);
  yield takeLatest(DECREMENTING_COUNT, decrementCount);
}

export default counterSaga;
