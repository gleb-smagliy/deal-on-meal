import PropTypes from 'prop-types';

export default {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
