import { call, select } from 'redux-saga/effects'
import usersCount from '../selectors/users-count.js'
import storage from '../data';

export default function* (action)
{
  const roomUsersCount = yield select(usersCount, action.roomId);

  if(roomUsersCount < 1)
  {
    yield call(storage.deleteRoom.bind(storage), action.roomId);
  }
};
