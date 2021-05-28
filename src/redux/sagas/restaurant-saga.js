import {put} from 'redux-saga/effects';
import {setRestaurants} from '../reducers/restaurants-reducer';
import {setError, setLoading} from '../reducers/app-reducer';

import {
  restaurantsRequest,
  restaurantsTransform,
} from '../../services/restaurants/restaurants.service';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* getRestaurantsData(action) {
  yield put(setRestaurants([]));
  yield put(setLoading(true));
  try {
    yield delay(2000);
    const response = yield restaurantsRequest(action.location);
    const results = yield restaurantsTransform(response);
    yield put(setRestaurants(results));
  } catch (error) {
    yield put(setError(error));
  } finally {
    yield put(setLoading(false));
  }
}
