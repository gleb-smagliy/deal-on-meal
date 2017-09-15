import { call, takeLatest } from 'redux-saga/effects'
import actionTypes from '../action-types';

export function* onSuccessGenerator(action)
{
  yield call(window.history.replaceState.bind(window.history), {}, '', `/${action.roomId}`);
}

export default function* ()
{
  yield takeLatest(actionTypes.FETCH_PRODUCTS_SUCCESS, onSuccessGenerator);
}
