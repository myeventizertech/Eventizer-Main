
export const LoginSuccess = (AmpUserInfo) => ({
  type: "LOGIN_SUCCESS",
  payload: AmpUserInfo,
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const UpdateStart = () => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (AmpUserInfo) => ({
  type: "UPDATE_SUCCESS",
  payload: AmpUserInfo,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
