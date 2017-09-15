import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './actions';
import moduleId from './constants/module-id';
import ProductsList from '../../components/products-list';

export const mapStateToProps = state => {
  const products = state[moduleId].toJS();

  return {
    products
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onItemChange: bindActionCreators(({ title, id }) => actions.updateProductTitle({ title, id }), dispatch),
    onItemButtonClick: bindActionCreators(({ id }) => actions.removeProduct({ id }), dispatch)
  };
};

export { actions };
export { default as reducer } from './reducer';
export { default as saga } from './saga';
export { default as selectProducts } from './selectors/select-products';
export { moduleId };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
