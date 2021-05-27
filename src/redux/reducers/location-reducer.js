const SET_KEYWORD = 'SET_KEYWORD';
const SET_LOCATION = 'SET_LOCATION';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';

const initialState = {
  location: null,
  keyword: 'San Francisco',
};

export const setKeyword = keyword => ({
  type: SET_KEYWORD,
  keyword,
});

export const setLocation = location => ({
  type: SET_LOCATION,
  location,
});

export const updateLocation = keyword => ({
  type: UPDATE_LOCATION,
  keyword,
});

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };

    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };

    default:
      return state;
  }
};

export default locationReducer;
