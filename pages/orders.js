import PropTypes from 'prop-types';

const Orders = ({ orders }) => <div>I have {orders} orders</div>;

Orders.propTypes = {
  orders: PropTypes.number,
};

Orders.defaultProps = {
  orders: 2,
};

export default Orders;
