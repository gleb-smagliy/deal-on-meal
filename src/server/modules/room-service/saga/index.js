import { takeEvery } from 'redux-saga/effects';
import dispatchToRoomGenerator from './dispatch-to-room';
import userJoinGenerator from './user-join';
import userLeftGenerator from './user-left';
import emitActionGenerator from './emit-action';
import  actionTypes from '../action-types';

export default function* ({ socketNamespace, clientReducer })
{
  yield takeEvery(actionTypes.USER_JOIN, userJoinGenerator, { socketNamespace, clientReducer });
  yield takeEvery(actionTypes.USER_LEFT, userLeftGenerator);
  yield takeEvery(actionTypes.EMIT_CLIENT_ACTION, emitActionGenerator, { socketNamespace });
  yield takeEvery(actionTypes.DISPATCH_CLIENT_ACTION, dispatchToRoomGenerator);
};
