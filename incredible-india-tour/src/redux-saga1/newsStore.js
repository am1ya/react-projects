import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reduxReducer1';
import rootSaga from './saga1';

const sagaMiddleware = createSagaMiddleware();

const newsStore = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default newsStore;