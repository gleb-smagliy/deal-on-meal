import actionTypes from '../action-types';

export default {
  fetchProductsSuccess: ({ products, roomId }) => ({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, products, roomId }),
  removeProduct: ({ id }) => ({ type: actionTypes.REMOVE_PRODUCT, id }),
  addProduct: () => ({ type: actionTypes.ADD_PRODUCT }),
  updateProductTitle: ({ id, title }) => ({ type: actionTypes.UPDATE_PRODUCT_TITLE, id, title })
};
