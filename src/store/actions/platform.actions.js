import {UPDATE_PLATFORM} from "../const/platform.const.js";

export const updatePlatform = (payload = "macos") => ({type: UPDATE_PLATFORM, payload});
export const updatePlatform_async = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(updatePlatform(payload));
  }, 1000);
}

