import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../root-reducer/root.reducer';
import rootSagas from '../root-sagas/root.sagas';

const sagaMiddleWare = createSagaMiddleware();

const middleWareAll = [
  logger,
  sagaMiddleWare
];

export const STORE = createStore(
  rootReducer,
  applyMiddleware(...middleWareAll)
);

sagaMiddleWare.run(rootSagas);
