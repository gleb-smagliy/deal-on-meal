import actions from './';
import actionTypes from '../action-types';

const roomId = 123;
const products = [{ title: 'Pizza' }, { title: 'Potato' }];
const id = 321;
const title = 'Pizza';

describe('<ProductsList action creators />', () =>
{
  it('Should be able to create action for fetchProductsSuccess', () =>
  {
    expect(typeof actions.fetchProductsSuccess).toEqual('function');

    expect(actions.fetchProductsSuccess({ products, roomId })).toEqual(
      { type: actionTypes.FETCH_PRODUCTS_SUCCESS, products, roomId }
    );
  });

  it('Should be able to create action to removeProduct', () => {
    expect(typeof actions.removeProduct).toEqual('function');

    expect(actions.removeProduct({ id })).toEqual(
      { type: actionTypes.REMOVE_PRODUCT, id }
    );
  });

  it('Should be able to create action to addProduct', () => {
    expect(typeof actions.addProduct).toEqual('function');

    expect(actions.addProduct()).toEqual(
      { type: actionTypes.ADD_PRODUCT }
    );
  });

  it('Should be able to create action to updateProductTitle', () => {
    expect(typeof actions.updateProductTitle).toEqual('function');

    expect(actions.updateProductTitle({ id, title })).toEqual(
      { type: actionTypes.UPDATE_PRODUCT_TITLE, id, title }
    );
  });
});
