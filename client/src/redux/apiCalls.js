import { publicRequest } from "../requestMethod";

import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const result = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(result.data));

    window.location.href = "/";
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutSuccess());
  window.location.href = "/login";
};
