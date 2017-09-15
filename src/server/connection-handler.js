import { actions as roomActions } from './modules/room-service';
import templateParseUrl from './utils/template-parse-url';

const getRoomId = socket => templateParseUrl('/list/{roomId}', socket.handshake.headers.referer).roomId.toString() || socket.id.toString().slice(1, 6);

export default store => socket =>
{
  const roomId = getRoomId(socket);
  store.dispatch(roomActions.userJoin({ roomId, socketId: socket.id }));

  socket.on('action', action => store.dispatch(roomActions.dispatchClientAction({ roomId, clientAction: action, socketId: socket.id })));
  socket.on('disconnect', () => store.dispatch(roomActions.userLeft({ roomId })));
};
