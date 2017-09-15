import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as productListActions } from '../products-list';
import AddProduct from '../../components/add-product';

export const mapDispatchToProps = dispatch =>
{
  return {
    onClick: bindActionCreators(productListActions.addProduct, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
