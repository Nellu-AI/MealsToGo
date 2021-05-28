import {put} from 'redux-saga/effects';
import {setLocation} from '../reducers/location-reducer';
import {setError, setLoading} from '../reducers/app-reducer';

import {locationRequest, locationTransform} from '../../services/location/location.service';

export function* updateLocation(action) {
  try {
    yield put(setLoading(true));
    const response = yield locationRequest(action.keyword.toLowerCase());
    const data = yield locationTransform(response);

    yield put(setLocation(data));
  } catch (error) {
    yield put(setError(error));
  } finally {
    yield put(setLoading(false));
  }
}
