import { combineReducers } from 'redux';
import { reducer as roomsReducer, moduleId as roomsModuleId } from '../modules/room-service';

export default combineReducers({
  [roomsModuleId]: roomsReducer
});
