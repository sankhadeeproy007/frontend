import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <h4>This is the page component</h4>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
