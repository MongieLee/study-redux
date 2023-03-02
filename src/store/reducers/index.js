import {combineReducers} from "redux";
import countReducers from "./count.reducers.js";
import platformReducers from "./platform.reducers.js";

export default combineReducers({
  counter: countReducers,
  platform: platformReducers
});
