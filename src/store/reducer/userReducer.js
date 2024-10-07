import { SET_USER } from "../action/userAction";

const DefaultValue = {
  user: "admin",
};

const userReducer = (state = DefaultValue, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
