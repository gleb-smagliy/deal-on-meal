import React from 'react';
import { Header } from 'semantic-ui-react';
import ProductsListContainer from '../../../modules/products-list';
import AddProductContainer from '../../../modules/add-product';
import l10n from './l10n/ru.js';
import './main-screen.css';

const MainScreen = () => (
    <div className="App">
      <Header as="h1">{l10n.PAGE_HEADER}</Header>
      <ProductsListContainer />
      <AddProductContainer buttonText={l10n.ADD_PRODUCT_LABEL}/>
    </div>
);

export default MainScreen;
