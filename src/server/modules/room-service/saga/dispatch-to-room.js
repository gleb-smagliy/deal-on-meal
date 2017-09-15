import { call, put } from 'redux-saga/effects';
import actions from '../actions';
import storage from '../data';

export const getRoom = storage.getRoom.bind(storage);

export default function* (action)
{
  const storage = yield call(getRoom, action.roomId);
  yield call(storage.store.dispatch.bind(storage.store), action.clientAction);
  yield put(actions.emitClientAction({ roomId: action.roomId, clientAction: action.clientAction, socketId: action.socketId }));
};
