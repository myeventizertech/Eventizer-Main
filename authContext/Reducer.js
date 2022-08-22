const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        AmpUserInfo: action.payload,
      };
    case "LOGOUT":
      return {
        AmpUserInfo: null,
      };

    case "UPDATE_START":
      return {
        ...state,
      };
    case "UPDATE_SUCCESS":
      return {
        AmpUserInfo: action.payload,
      };
    case "UPDATE_FAILURE":
      return {
        AmpUserInfo: state.AmpUserInfo,
      };

    default:
      return state;
  }
};

export default Reducer;
