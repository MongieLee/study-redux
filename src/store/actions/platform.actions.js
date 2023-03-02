import {UPDATE_PLATFORM} from "../const/platform.const.js";

export const updatePlatform = (payload = "macos") => ({type: UPDATE_PLATFORM, payload});

