import moduleId from '../constants/module-id';

export default (state, roomId) => state[moduleId].get(roomId).store.getState();
