import moduleId from './constants/module-id'
import actions from './actions';
import { fromJS } from 'immutable';
import { mapStateToProps, mapDispatchToProps } from './';

describe('<ProductsList mapStateToProps />', () => {
  const products=fromJS([{
    id: 123,
    title: 'Bread'
  }]);

  const state = {
    [moduleId]: products
  };

  it('Should return products list from state', () =>
  {
    expect(mapStateToProps(state)).toEqual({ products: products.toJS() });
  });
});

describe('ProductsList mapDispatchToProps', () => {
  const dispatch = f => f;
  const title = '#test title';
  const id = 123;

  it('Should map updateProductTitle action to onItemChange prop', () =>
  {
    expect(mapDispatchToProps(dispatch).onItemChange({ id, title }))
    .toEqual(actions.updateProductTitle({ id, title }));
  });

  it('Should map removeProduct action to onItemButtonClick prop', () =>
  {
    expect(mapDispatchToProps(dispatch).onItemButtonClick({ id }))
    .toEqual(actions.removeProduct({ id }));
  });
});
