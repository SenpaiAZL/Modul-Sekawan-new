export const SET_USER = "SET_USER";

export const setUser = (lang) => {
  return {
    type: SET_USER,
    payload: lang,
  };
};
