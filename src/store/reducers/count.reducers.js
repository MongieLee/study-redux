import {handleActions as createReducer} from "redux-actions";
import {decrement, increment} from "../actions/count.actions.js";

const initialValue = {
  count: 0
}

const handleIncrement = (state, action) => {
  return ({count: state.count + action.payload ?? 1})
};

const handleDecrement = (state, action) => ({count: state.count - action.payload ?? 1});

const caReducer = createReducer({
  [increment]: handleIncrement,
  [decrement]: handleDecrement
}, initialValue);

export default caReducer;
// export default (state = initialValue, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {count: state.count + action.payload}
//     case DECREMENT:
//       return {count: state.count - action.payload}
//     default:
//       return state;
//   }
// }

