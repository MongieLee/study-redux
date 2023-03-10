import {all} from "redux-saga/effects";
import counterSaga from "./counter.saga.js";

export default function* () {
  return yield all([
    counterSaga()
  ]);
}
