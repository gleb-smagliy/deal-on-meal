import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import ProductsListItem from '../../products-list-item';

const ProductsList = ({
  onItemButtonClick,
  onItemChange,
  products
}) => (
  <List size="large">
    {
      products.map(p => (<ProductsListItem onChange={onItemChange} onButtonClick={onItemButtonClick} key={p.id} {...p} />))
    }
  </List>
);

ProductsList.propTypes = {
  onItemButtonClick: PropTypes.func.isRequired,
  onItemChange: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired
};

export default ProductsList;
