import {put, takeEvery} from 'redux-saga/effects';
import {
  toggleLoading,
  setRestaurants,
  setError,
  FETCH_RESTAURANTS,
} from '../reducers/restaurants-reducer';

import {
  restaurantsRequest,
  restaurantsTransform,
} from '../../services/restaurants/restaurants.service';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* getRestaurantsData(action) {
  yield put(toggleLoading(true));
  try {
    yield delay(2000);
    const response = yield restaurantsRequest(action.location);
    const results = yield restaurantsTransform(response);
    yield put(setRestaurants(results));
  } catch (error) {
    yield put(setError(error));
  } finally {
    yield put(toggleLoading(false));
  }
}

function* watchFetchRestaurants() {
  yield takeEvery(FETCH_RESTAURANTS, getRestaurantsData);
}

export default watchFetchRestaurants;
