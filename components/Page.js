import PropTypes from 'prop-types';

const Page = ({ children }) => <div>{children}</div>;

Page.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Page;
