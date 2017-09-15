import React from 'react';
import { List } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import ProductsList from './products-list.jsx';
import ProductsListItem, { propTypes as productsListItemPropTypes } from '../../products-list-item';

const props = {
  onItemButtonClick: x => x,
  onItemChange: x => x,
  products: [
    {
      id: 1,
      title: '#1'
    },
    {
      id: 2,
      title: '#2'
    }
  ]
};

describe('<ProductsList />', () =>
{
  it('Should be large List', () => {
    const productsList = shallow(<ProductsList  {...props}/>);

    expect(productsList.type()).toEqual(List);
    expect(productsList.props().size).toEqual('large');
  });

  it('Should render <ProductsListItem> for each props.products', () => {
    const productsList = shallow(<ProductsList  {...props}/>);

    expect(productsList.find(ProductsListItem)).toHaveLength(props.products.length);
  });
});
