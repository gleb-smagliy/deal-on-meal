import { Map } from 'immutable';
import actionTypes from '../action-types';

const initialState = new Map();

export default (state = initialState, action) =>
{
  switch(action.type)
  {
    case actionTypes.USER_JOIN:
      return state.has(action.roomId) ?
        state.updateIn([action.roomId, 'count'], v => v + 1) :
        state.set(action.roomId, new Map({ count: 1 }));

    case actionTypes.USER_LEFT:
      return state.has(action.roomId) && state.getIn([action.roomId, 'count']) > 1 ?
        state.updateIn([action.roomId, 'count'], v => v - 1) :
        state.delete(action.roomId);

    default:
      return state;
  }
}
