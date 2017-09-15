import moduleId from '../constants/module-id';

export default (state, roomId) =>
{
  const moduleState = state[moduleId];
  return moduleState.has(roomId) ? moduleState.getIn([roomId, 'count']) : 0;
};
