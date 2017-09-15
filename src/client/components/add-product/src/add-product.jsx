import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const AddProduct = ({
  buttonText,
  onClick
}) => (<Button onClick={onClick}>{buttonText}</Button>)

AddProduct.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default AddProduct;
