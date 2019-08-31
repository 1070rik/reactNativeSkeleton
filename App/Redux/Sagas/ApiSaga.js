/* eslint no-shadow: 0 */
import {takeLatest, put} from 'redux-saga/effects';
import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_SUCCESS,
} from '../constants';

function* fetchData(action, data) {
  const {kind} = data;
  try {
    const data = yield reqAPI.fetchData(kind).then(res => {
      return res.data;
    });
    yield put({type: FETCHING_DATA_SUCCESS, data});
  } catch (e) {
    console.tron.error(e.message);
    yield put({type: FETCHING_DATA_FAILURE, error: e});
  }
}

function* apiSaga() {
  yield takeLatest(FETCHING_DATA, fetchData, '');
}

export default apiSaga;
