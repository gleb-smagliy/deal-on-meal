import { combineReducers } from 'redux';
import socketEndpointPort from '../constants/socket-endpoint-port';
import createSocketClient from './socket-client';
import { createEmmiterMiddleware, syncSocketClientWithStore } from './action-emitter';
import createStore from './create-store';
import {
  moduleId as productsListModuleId,
  reducer as productsListReducer,
  saga as productsListSaga
} from './modules/products-list';

export function* rootSaga()
{
  yield productsListSaga();
}

export const rootReducer = combineReducers(
  {
    [productsListModuleId]: productsListReducer
  }
);

export default () =>
{
  const socketClient = createSocketClient(socketEndpointPort);
  const store = createStore(rootReducer, rootSaga, createEmmiterMiddleware(socketClient));

  syncSocketClientWithStore(socketClient, store);

  socketClient.open();

  return store;
};
