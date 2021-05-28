import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import restaurantsReducer from './reducers/restaurants-reducer';
import locationReducer from './reducers/location-reducer';
import appReducer from './reducers/app-reducer';
import favouritesReducer from './reducers/favourites-reducer';

import {watchAll} from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  app: appReducer,
  restaurants: restaurantsReducer,
  location: locationReducer,
  favourites: favouritesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAll);
