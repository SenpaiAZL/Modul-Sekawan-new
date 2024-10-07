import { SET_RESTO } from "../action/RestoAction";

const DefaultValue = {
  resto: null,
};

const restoReducer = (state = DefaultValue, action) => {
  switch (action.type) {
    case SET_RESTO:
      return {
        ...state,
        resto: action.payload,
      };
    default:
      return state;
  }
};

export default restoReducer;
