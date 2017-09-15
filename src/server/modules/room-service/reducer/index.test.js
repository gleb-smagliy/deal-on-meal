import { fromJS, Map } from 'immutable';
import actionTypes from '../action-types';
import reducer from './';

describe('StoreService reducer', () =>
{
  const roomId = '123';

  it('Should be a function ', () =>
  {
    expect(typeof reducer).toEqual('function');
  });

  it('Should return a Map initialState', () =>
  {
    expect(reducer(undefined, { type: 'INIT' })).toEqual(
      new Map()
    );
  });

  it('Should return previous state on any action', () =>
  {
    expect(reducer(1, { type: 'any' })).toEqual(
      1
    );
  });

  it('Should create new room if no appropriate room exist on USER_JOIN', () =>
  {
    const before = fromJS({});
    const after = fromJS({
      [roomId]: {
        count: 1
      }
    });

    expect(reducer(before, { type: actionTypes.USER_JOIN, roomId }).toJS()).toEqual(
      after.toJS()
    );
  });

  it('Should add 1 to room count if appropriate store exist on USER_JOIN', () =>
  {
    const before = fromJS({
      [roomId]: {
        count: 1
      }
    });

    const after = fromJS({
      [roomId]: {
        count: 2
      }
    });

    expect(reducer(before, { type: actionTypes.USER_JOIN, roomId }).toJS()).toEqual(
      after.toJS()
    );
  });

  it('Should decrease by 1 room count if room has users count > 1 on USER_LEFT', () =>
  {
    const before = fromJS({
      [roomId]: {
        count: 2
      }
    });

    const after = fromJS({
      [roomId]: {
        count: 1
      }
    });

    expect(reducer(before, { type: actionTypes.USER_LEFT, roomId }).toJS()).toEqual(
      after.toJS()
    );
  });

  it('Should remove room if it has users count <= 1 on USER_LEFT', () =>
  {
    const before = fromJS({
      [roomId]: {
        count: 1
      }
    });

    const after = fromJS({
    });

    expect(reducer(before, { type: actionTypes.USER_LEFT, roomId }).toJS()).toEqual(
      after.toJS()
    );
  });
});
