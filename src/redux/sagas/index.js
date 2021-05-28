import {takeEvery} from 'redux-saga/effects';

import {FETCH_RESTAURANTS} from '../reducers/restaurants-reducer';
import {UPDATE_LOCATION} from '../reducers/location-reducer';
import {ON_LOGIN, ON_REGISTER, ON_LOGOUT} from '../reducers/app-reducer';

import {getRestaurantsData} from './restaurant-saga';
import {updateLocation} from './location-saga';
import {login, register, logout} from './auth-saga';

export function* watchAll() {
  yield takeEvery(FETCH_RESTAURANTS, getRestaurantsData);
  yield takeEvery(UPDATE_LOCATION, updateLocation);
  yield takeEvery(ON_LOGIN, login);
  yield takeEvery(ON_REGISTER, register);
  yield takeEvery(ON_LOGOUT, logout);
}
