export const syncSocketClientWithStore = (socket, store) =>
{
  socket.on('action', action => store.dispatch({ ...action, emmiterExternal: true }));
};

export const createEmmiterMiddleware = socket => store => next => action =>
{
  if(!action.emmiterExternal)
  {
    socket.emit('action', action);
  }

  return next(action);
};
