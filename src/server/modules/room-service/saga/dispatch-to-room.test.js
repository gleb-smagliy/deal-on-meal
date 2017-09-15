import { call, put } from 'redux-saga/effects';
import actions from '../actions';
import storage from '../data';

import dispatchToRoomGenerator, { getRoom }  from './dispatch-to-room';

describe('dispatchToRoomGenerator', () =>
{
  const socketId = 1;
  const roomId = 2;
  const clientAction = 123;

  const storage = {
    store: {
      dispatch: x => x
    }
  };

  const action = {
    socketId,
    roomId,
    clientAction
  };

  it('Should take room from storage', () =>
  {
    const generator = dispatchToRoomGenerator(action);

    expect(JSON.stringify(generator.next().value))
      .toEqual(JSON.stringify(call(getRoom, action.roomId)));
  });

  it('Should call dispatch on generator with received action', () =>
  {
    const generator = dispatchToRoomGenerator(action);
    generator.next(storage);

    expect(JSON.stringify(generator.next(storage).value))
      .toEqual(JSON.stringify(call(storage.store.dispatch.bind(storage.store), action.clientAction)));
  });

  it('Should put emit client action with received action', () =>
  {
    const generator = dispatchToRoomGenerator(action);
    generator.next();
    generator.next(storage);

    expect(JSON.stringify(generator.next().value))
      .toEqual(JSON.stringify(put(actions.emitClientAction({ roomId: action.roomId, clientAction: action.clientAction, socketId: action.socketId }))));

    expect(generator.next().done)
      .toEqual(true);
  });

});
