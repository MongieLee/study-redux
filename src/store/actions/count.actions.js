import {INCREMENT, DECREMENT, INCREMENT_SAGA} from "../const/count.const.js";
import {createAction} from "redux-actions";

// export const increment = (payload = 1) => ({type: INCREMENT, payload});
// export const decrement = (payload = 1) => ({type: DECREMENT, payload});

export const increment_saga = (payload = 1) => ({type: INCREMENT_SAGA, payload});

export const increment = createAction("increment");
export const decrement = createAction("decrement");
