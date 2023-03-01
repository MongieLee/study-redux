import {INCREMENT, DECREMENT} from "../const/count.const.js";

export const increment = (payload = 1) => ({type: INCREMENT, payload});

export const decrement = (payload = 1) => ({type: DECREMENT, payload});
