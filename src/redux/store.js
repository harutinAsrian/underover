import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)


export default store;