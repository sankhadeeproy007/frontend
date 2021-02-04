import PropTypes from 'prop-types';

const Sell = ({ price }) => <div>Sell page here {price}</div>;

Sell.propTypes = {
  price: PropTypes.number,
};

Sell.defaultProps = {
  price: 20,
};

export default Sell;
