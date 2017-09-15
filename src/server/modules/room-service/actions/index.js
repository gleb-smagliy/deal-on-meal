import actionTypes from '../action-types';

export default {
  userJoin: ({ roomId, socketId }) => ({ type: actionTypes.USER_JOIN, roomId, socketId }),
  userLeft: ({ roomId }) => ({ type: actionTypes.USER_LEFT, roomId }),
  emitClientAction: ({ roomId, clientAction, socketId }) => ({ type: actionTypes.EMIT_CLIENT_ACTION, roomId, clientAction, socketId }),
  dispatchClientAction: ({ roomId, clientAction, socketId }) => ({ type: actionTypes.DISPATCH_CLIENT_ACTION, roomId, clientAction, socketId })
};
