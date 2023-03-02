import {DECREMENT, INCREMENT} from "../const/count.const.js";
import {UPDATE_PLATFORM} from "../const/platform.const.js";

const initialValue = {
  value: "default platform"
}

export default (state = initialValue, action) => {
  switch (action.type) {
    case UPDATE_PLATFORM:
      return {value: action.payload}
    default:
      return state;
  }
}
