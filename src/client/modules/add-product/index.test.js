import { bindActionCreators } from 'redux';
import { mapDispatchToProps } from './';
import { actions as productListActions } from '../products-list';

describe('AddProduct mapDispatchToProps ', () => {
  const dispatch = f => f;

  it('Should map addProduct action to onClick', () =>
  {
    expect(mapDispatchToProps(dispatch).onClick()).toEqual(productListActions.addProduct());
  });
});
