import React from 'react';
import Sinon from 'sinon';
import { Header } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import ProductsListContainer from '../../../modules/products-list';
import AddProductContainer from '../../../modules/add-product';
import l10n from './l10n/ru.js';
import MainScreen from './main-screen.jsx';

const createSut = () => shallow(<MainScreen />);

describe('<MainScreen />', () => {
  it('Should contain a Header with specified in l10n text', () => {
    expect(createSut().find(Header).html()).toContain(l10n.PAGE_HEADER);
  });

  it('Should contain a ProductsListContainer', () => {
    expect(createSut().find(ProductsListContainer)).toHaveLength(1);
  });

  it('Should contain a AddProductContainer with specified in l10n buttonText prop', () => {
    expect(createSut().find(AddProductContainer).props().buttonText).toContain(l10n.ADD_PRODUCT_LABEL);
  });
});
