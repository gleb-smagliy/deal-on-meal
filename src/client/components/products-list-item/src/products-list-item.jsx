import React from 'react';
import propTypes from './props';
import { List, Input, Button } from 'semantic-ui-react';

const ProductsListItem = ({
  id,
  title,
  onButtonClick,
  onChange
}) => (
  <List.Item>
    <Button onClick={() => onButtonClick({ id })} basic size="large" icon="remove" />
    <Input onChange={(event, props) => onChange({ title: props.value, id })} value={title} />
  </List.Item>
);

ProductsListItem.propTypes = propTypes;

export default ProductsListItem;
