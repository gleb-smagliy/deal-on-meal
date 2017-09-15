import { call, select } from 'redux-saga/effects';
import userJoinGenerator, { getRoom, saveRoom } from './user-join';
import { actions as clientActions, selectProducts } from '../../../../client/modules/products-list';
import { createStore } from 'redux';

describe('userJoinGenerator', () =>
{
  const socketId = 1;
  const roomId = 2;
  const socket = { emit: x => x, join: x => x };

  const clientReducer = x => x;

  const room = {
    store: {
        getState: x => x
    }
  };

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

  const createGenerator = () => userJoinGenerator({ clientReducer, socketNamespace }, action);

  it('Should take room from storage', () =>
  {
    const generator = createGenerator();

    expect(JSON.stringify(generator.next().value))
      .toEqual(JSON.stringify(call(getRoom, action.roomId)));
  });

  it('Should create room with clientReducer if there is no room present', () =>
  {
    const generator = createGenerator();
    generator.next();

    expect(JSON.stringify(generator.next(undefined).value))
      .toEqual(JSON.stringify(call(saveRoom, action.roomId, { store: createStore(clientReducer) })));
  });

  it('Should take room from storage after creation', () =>
  {
    const generator = createGenerator();
    generator.next();
    generator.next(undefined);

    expect(JSON.stringify(generator.next().value))
      .toEqual(JSON.stringify(call(getRoom, action.roomId)));
  });

  it('Should take room from storage after creation', () =>
  {
    const generator = createGenerator();
    generator.next();
    generator.next(undefined);

    expect(JSON.stringify(generator.next().value))
      .toEqual(JSON.stringify(call(getRoom, action.roomId)));
  });

  it('Should join socket to room', () =>
  {
    const generator = createGenerator();
    generator.next();
    expect(JSON.stringify(generator.next(room).value))
      .toEqual(JSON.stringify(call(socket.join.bind(socket), action.roomId)));
  });
});
