import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default (reducer, saga, emmiterMiddleware) =>
{
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, undefined, applyMiddleware(emmiterMiddleware, sagaMiddleware));

  console.log('saga: ', saga);
  sagaMiddleware.run(saga);

  return store;
};
