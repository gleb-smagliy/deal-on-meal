
import createSocketServer from 'socket.io';
import connectionHandler from './connection-handler';
import createStore from './store';

export const start = ({ clientReducer, port }) =>
{
  const socketServer = createSocketServer(port);
  const store = createStore({ socketNamespace: socketServer.of('/'), clientReducer });

  socketServer.on('connection', connectionHandler(store));

  console.log('listening on:', port);
}
