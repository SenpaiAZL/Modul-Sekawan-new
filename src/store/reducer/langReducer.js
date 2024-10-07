import { SET_LANG } from "../action/langAction";

const DefaultValue = {
    lang: "en",
    
};

const langReducer = (state = DefaultValue, action) => {
    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                lang: action.payload,
            };
        default:
            return state; 
    };
};

export default langReducer;