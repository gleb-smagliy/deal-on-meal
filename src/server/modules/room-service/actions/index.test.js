import actionTypes from '../action-types';
import actions from './';

describe('<StoreService action creators />', () =>
{
  const roomId = 123;
  const clientAction = { type: 'client_action' };
  const socketId = 321;

  it('Should be able to create action for userJoin', () =>
  {
    expect(typeof actions.userJoin).toEqual('function');

    expect(actions.userJoin({ roomId, socketId })).toEqual(
      { type: actionTypes.USER_JOIN, roomId, socketId }
    );
  });

  it('Should be able to create action for userLeft', () =>
  {
    expect(typeof actions.userLeft).toEqual('function');

    expect(actions.userLeft({ roomId })).toEqual(
      { type: actionTypes.USER_LEFT, roomId }
    );
  });

  it('Should be able to create action to dispatch client action', () =>
  {
    expect(typeof actions.dispatchClientAction).toEqual('function');

    expect(actions.dispatchClientAction({ roomId, clientAction, socketId })).toEqual(
      { type: actionTypes.DISPATCH_CLIENT_ACTION, roomId, clientAction, socketId }
    );
  });

  it('Should be able to create action to emit client action', () =>
  {
    expect(typeof actions.emitClientAction).toEqual('function');

    expect(actions.emitClientAction({ roomId, clientAction, socketId })).toEqual(
      { type: actionTypes.EMIT_CLIENT_ACTION, roomId, clientAction, socketId }
    );
  });
});
