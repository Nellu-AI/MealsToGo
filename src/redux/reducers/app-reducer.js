const TOGGLE_LOADING = 'TOGGLE_LOADING';
const SET_ERROR = 'SET_ERROR';

const initialState = {
  isLoading: false,
  error: null,
};

export const toggleLoading = isLoading => ({
  type: TOGGLE_LOADING,
  isLoading,
});

export const setError = error => ({
  type: SET_ERROR,
  error,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export default appReducer;
