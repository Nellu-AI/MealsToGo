const SET_RESTAURANTS = 'SET_RESTAURANTS';

export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';

const initialState = {
  list: [],
};

// Action creators

export const setRestaurants = restaurants => ({
  type: SET_RESTAURANTS,
  restaurants,
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
        list: action.restaurants,
      };
    default:
      return state;
  }
};

export default restaurantsReducer;
