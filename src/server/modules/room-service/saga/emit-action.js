import { call } from 'redux-saga/effects';

export default function* ({ socketNamespace }, action)
{
  const socket = socketNamespace.connected[action.socketId];

  const roomEmitter = yield call(socket.to.bind(socket), action.roomId);

  yield call(roomEmitter.emit.bind(roomEmitter), 'action', action.clientAction);
};
