import { call, takeEvery } from 'redux-saga/effects'
import actionTypes from '../action-types';
import rootSaga from './';
import dispatchToRoomGenerator from './dispatch-to-room';
import userJoinGenerator from './user-join';
import userLeftGenerator from './user-left';
import emitActionGenerator from './emit-action';

describe('roomService rootSaga', () =>
{
  const socketNamespace = 123;
  const clientReducer = 123;
  const sagaArgs = { socketNamespace, clientReducer };

  it('Should take every of corresponding for generators actions', () =>
  {
    const saga = rootSaga(sagaArgs);

    expect(saga.next().value)
      .toEqual(takeEvery(actionTypes.USER_JOIN, userJoinGenerator, { socketNamespace, clientReducer }));
    expect(saga.next().value)
      .toEqual(takeEvery(actionTypes.USER_LEFT, userLeftGenerator));
    expect(saga.next().value)
      .toEqual(takeEvery(actionTypes.EMIT_CLIENT_ACTION, emitActionGenerator, { socketNamespace }));
    expect(saga.next().value)
      .toEqual(takeEvery(actionTypes.DISPATCH_CLIENT_ACTION, dispatchToRoomGenerator));

    expect(saga.next().done)
      .toEqual(true)
  });
});
