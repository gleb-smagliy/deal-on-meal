import { call, select } from 'redux-saga/effects';
import { createStore } from 'redux';
import { actions as clientActions, selectProducts } from '../../../../client/modules/products-list';
import usersCount from '../selectors/users-count';
import roomState from '../selectors/room-state';
import storage from '../data';

export const getRoom = storage.getRoom.bind(storage);
export const saveRoom = storage.saveRoom.bind(storage);

export default function* ({ clientReducer, socketNamespace }, action)
{
  let room;
  const socket = socketNamespace.connected[action.socketId];

  room = yield call(getRoom, action.roomId);

  if(!room)
  {
    yield call(saveRoom, action.roomId, { store: createStore(clientReducer) });
    room = yield call(getRoom, action.roomId);
  }

  yield call(socket.join.bind(socket), action.roomId);

  const roomState = yield call(room.store.getState);

  yield call(socket.emit.bind(socket), 'action', clientActions.fetchProductsSuccess({ products: selectProducts(roomState), roomId: action.roomId }));
};
