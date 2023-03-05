import {delay, put, takeEvery} from 'redux-saga/effects'
import {increment} from "../actions/count.actions.js";
import {INCREMENT_SAGA} from "../const/count.const.js";
// put等于dispatch
// takeEvery用于接收action

function* increment_saga_fn() {
  yield delay(1000);
  yield put(increment());
}

export default function* counterSaga() {
  // takeEvery要接受的第一个参数是字符串
  yield takeEvery(INCREMENT_SAGA, increment_saga_fn)
}
