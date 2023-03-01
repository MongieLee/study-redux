import {legacy_createStore} from "redux";
import countReducers from "./reducers/count.reducers.js";

const store = legacy_createStore(countReducers);
store.subscribe(() => {
  console.log(`store更新了`);
  console.log(store.getState());
});
export default store;
