import selectProducts from './select-products';
import moduleId from '../constants/module-id';

describe('ProductsList reducer ', () => {
  const list = [{ id: 1 }];

  const state = {
    [moduleId]: list
  };

  it('Should be a function', () =>
  {
    expect(typeof selectProducts).toEqual('function');
  });

  it('Should return products list by moduleId from the whole state', () =>
  {
    expect(selectProducts(state)).toEqual(list);
  });
});
