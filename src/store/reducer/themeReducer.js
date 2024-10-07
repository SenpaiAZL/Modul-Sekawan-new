import { TOOGLE_THEME } from "../action/ThemeAction"

const defaultvalue = {
    theme : "dark",  
}

const themeReducer = (state = defaultvalue, action) => {
    switch (action.type) {
        case TOOGLE_THEME:
            return {
                ...state,
                theme: state.theme === 'dark' ? 'light' : 'dark',
            };
        default:
            return state;
    }
};

export default themeReducer;