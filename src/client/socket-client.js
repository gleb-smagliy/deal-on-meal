import io from 'socket.io-client';

export default (socketEndpointPort) =>
{
  const currentLocation = new URL(window.location.href);
  const socketEndpoint = `${currentLocation.protocol}//${currentLocation.hostname}:${socketEndpointPort}`;

  return io(socketEndpoint, {
    forceNew: true,
    autoConnect: false
  });
}
