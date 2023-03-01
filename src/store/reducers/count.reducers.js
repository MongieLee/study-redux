import {DECREMENT, INCREMENT} from "../const/count.const.js";

const initialValue = {
  count: 0
}

export default (state = initialValue, action) => {
  switch (action.type) {
    case INCREMENT:
      return {count: state.count + action.payload}
    case DECREMENT:
      return {count: state.count - action.payload}
    default:
      return state;
  }
}
