import {applyMiddleware, legacy_createStore} from "redux";
import reducers from "./reducers/index.js";
import logMiddleware from "../middleware/logMiddleware.js";
import thunkMiddleware from "../middleware/thunkMiddleware.js";
import thunk from "redux-thunk";
// const store = legacy_createStore(reducers, applyMiddleware(logMiddleware, thunkMiddleware));
const store = legacy_createStore(reducers, applyMiddleware(logMiddleware,thunk));
store.subscribe(() => {
  console.log(`store更新了`);
  console.log(store.getState());
});
export default store;
