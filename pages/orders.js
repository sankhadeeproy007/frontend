import PropTypes from 'prop-types';

const Orders = ({ orders }) => <div>I have {orders} orders</div>;

Orders.propTypes = {
  orders: PropTypes.number,
};

Orders.defaultProps = {
  orders: 3,
};

export default Orders;
