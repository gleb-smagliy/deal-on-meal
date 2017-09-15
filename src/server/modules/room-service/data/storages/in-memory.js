export default class InMemoryStorage
{
  constructor()
  {
    this.innerStorage = {};
  }

  getRoom(roomId)
  {
    return this.innerStorage[roomId];
  }

  saveRoom(roomId, state)
  {
    this.innerStorage[roomId] = state;
  }

  deleteRoom(roomId)
  {
    delete this.innerStorage[roomId];
  }
}
