import {applyMiddleware, legacy_createStore} from "redux";
import reducers from "./reducers/index.js";
import logMiddleware from "../middleware/logMiddleware.js";
import thunkMiddleware from "../middleware/thunkMiddleware.js";

const store = legacy_createStore(reducers, applyMiddleware(logMiddleware, thunkMiddleware));
store.subscribe(() => {
  console.log(`store更新了`);
  console.log(store.getState());
});
export default store;
