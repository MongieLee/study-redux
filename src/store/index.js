import {applyMiddleware, legacy_createStore} from "redux";
import reducers from "./reducers/index.js";
import logMiddleware from "../middleware/logMiddleware.js";
import thunkMiddleware from "../middleware/thunkMiddleware.js";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import counterSaga from "./sagas/counter.saga.js";
// const store = legacy_createStore(reducers, applyMiddleware(logMiddleware, thunkMiddleware));
const sagaMiddle = createSagaMiddleware();
const store = legacy_createStore(reducers, applyMiddleware(logMiddleware, sagaMiddle));
store.subscribe(() => {
  console.log(`store更新了`);
  console.log(store.getState());
});

sagaMiddle.run(counterSaga)
export default store;
