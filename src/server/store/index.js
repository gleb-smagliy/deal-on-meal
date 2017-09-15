import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export default ({ socketNamespace, clientReducer }) =>
{
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer,
    undefined,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga, { socketNamespace, clientReducer });

  return store;
};
