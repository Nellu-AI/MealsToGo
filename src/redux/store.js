import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import watchFetchRestaurants from './sagas/restaurant-saga';
import restaurantsReducer from './reducers/restaurants-reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchFetchRestaurants);

export default store;
