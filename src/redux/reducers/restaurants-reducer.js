const SET_RESTAURANTS = 'SET_RESTAURANTS';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const SET_ERROR = 'SET_ERROR';

export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';

const initialState = {
  restaurants: [],
  isLoading: false,
  error: null,
};

// Actions creators

export const setRestaurants = restaurants => ({
  type: SET_RESTAURANTS,
  restaurants,
});

export const toggleLoading = isLoading => ({
  type: TOGGLE_LOADING,
  isLoading,
});

export const setError = error => ({
  type: SET_ERROR,
  error,
});

export const fetchRestaurants = location => ({
  type: FETCH_RESTAURANTS,
  location,
});

// reducer

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
      };
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
};

export default restaurantsReducer;
