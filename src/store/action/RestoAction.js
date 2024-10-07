export const SET_RESTO = "SET_RESTO";

export const setResto = (resto) => {
  return {
    type: SET_RESTO,
    payload: resto,
  };
};

export const SET_LOADING = "SET_LOADING";
export const setLoading = (loading) => ({
  type: "SET_LOADING",
  payload: loading,
});

export const SET_ERROR = "SET_ERROR";
export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});
