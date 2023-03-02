import {legacy_createStore} from "redux";
import reducers from "./reducers/index.js";

const store = legacy_createStore(reducers);
store.subscribe(() => {
  console.log(`store更新了`);
  console.log(store.getState());
});
export default store;
