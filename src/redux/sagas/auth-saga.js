import {put} from 'redux-saga/effects';
import {setError, setLoading, setUser} from '../reducers/app-reducer';
import {loginRequest, registerRequest, logOut} from '../../services/authentication/auth.service';

export function* login(action) {
  yield put(setLoading(true));
  try {
    const data = yield loginRequest(action.email, action.password);
    yield put(setUser(data));
    yield put(setError(null));
  } catch (error) {
    yield put(setError(error.toString()));
  } finally {
    yield put(setLoading(false));
  }
}

export function* register(action) {
  if (action.password !== action.repeatedPassword) {
    yield put(setError('ERROR: Passwords do not match'));
  } else {
    yield put(setLoading(true));
    try {
      const data = yield registerRequest(action.email, action.password);
      yield put(setUser(data));
      yield put(setError(null));
    } catch (error) {
      yield put(setError(error.toString()));
    } finally {
      yield put(setLoading(false));
    }
  }
}

export function* logout() {
  yield put(setUser(null));
  try {
    yield logOut();
  } catch (e) {
    yield put(setError(e));
  }
}
