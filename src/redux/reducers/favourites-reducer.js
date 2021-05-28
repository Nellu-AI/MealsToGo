const ADD_FAVOURITE = 'ADD_FAVOURITE';
const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

const initialState = {
  list: [],
};

export const addRestaurant = item => ({
  type: ADD_FAVOURITE,
  item,
});

export const removeRestaurant = item => ({
  type: REMOVE_FAVOURITE,
  item,
});

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        list: [...state.list, action.item],
      };

    case REMOVE_FAVOURITE:
      return {
        list: state.list.filter(x => x.placeId !== action.item.placeId),
      };
    default:
      return state;
  }
};
export default favouritesReducer;
