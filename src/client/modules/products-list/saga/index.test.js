import { call, takeLatest } from 'redux-saga/effects'
import actionTypes from '../action-types';
import saga, { onSuccessGenerator } from './';

describe('ProductsList saga ', () =>
{
  it('Should take latest of FETCH_PRODUCTS_SUCCESS for onSuccessGenerator', () =>
  {
    expect(saga().next().value)
      .toEqual(takeLatest(actionTypes.FETCH_PRODUCTS_SUCCESS, onSuccessGenerator));
  });
});

describe('OnSuccessGenerator ', () =>
{
  const action = {
    roomId: 123
  }

  it('Should replace current location with roomId corresponding location', () =>
  {
    const generator = onSuccessGenerator(action);

    expect(JSON.stringify(generator.next().value))
      .toEqual(JSON.stringify(call(window.history.replaceState.bind(window.history), {}, '', `/${action.roomId}`)));

      expect(generator.next().done)
        .toEqual(true);
  });
});
