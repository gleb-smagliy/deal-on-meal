import { call, select } from 'redux-saga/effects';
import emitActionGenerator from './emit-action';

describe('emitActionGenerator', () =>
{
  const socketId = 1;
  const roomId = 2;
  const socket = { to: x => x };

  const socketNamespace = {
    connected: {
      [socketId]: socket
    }
  };

  const action = {
    socketId,
    roomId,
    clientAction: 123
  };

  it('Should take room emitter from connected socket', () =>
  {
    const generator = emitActionGenerator({ socketNamespace }, action);

    expect(JSON.stringify(generator.next().value))
      .toEqual(JSON.stringify(call(socket.to.bind(socket), action.roomId)));
  });

  it('Should emit action to roomEmitter', () =>
  {
    const generator = emitActionGenerator({ socketNamespace }, action);
    const roomEmitter = { emit: x => x };
    generator.next().value;

    expect(JSON.stringify(generator.next(roomEmitter).value))
      .toEqual(JSON.stringify(call(roomEmitter.emit.bind(roomEmitter), 'action', action.clientAction)));

    expect(generator.next().done)
      .toEqual(true);

  });
});
