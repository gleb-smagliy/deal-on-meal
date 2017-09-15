import { call, select } from 'redux-saga/effects';
import usersCount from '../selectors/users-count';
import storage from '../data';
import userLeftGenerator from './user-left';

describe('userLeftGenerator', () =>
{
  const roomId = 2;

  const action = {
    roomId
  };

  it('Should select number of users left in the room', () =>
  {
    const generator = userLeftGenerator(action);

    expect(JSON.stringify(generator.next().value))
      .toEqual(JSON.stringify(select(usersCount, action.roomId)));
  });

  it('Should remove room if number of users < 1', () =>
  {
    const generator = userLeftGenerator(action);
    generator.next();

    expect(JSON.stringify(generator.next(0).value))
      .toEqual(JSON.stringify(call(storage.deleteRoom.bind(storage), action.roomId)));

    expect(generator.next(0).done)
      .toEqual(true);
  });

  it('Should not remove room if number of users >= 1', () =>
  {
    const generator = userLeftGenerator(action);
    generator.next();

    expect(generator.next(1).done)
      .toEqual(true);
  });
});
