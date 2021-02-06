import PropTypes from 'prop-types';

import Page from '../components/Page';

const Home = ({ name }) => <Page> Hello {name} from home</Page>;

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: 'Sankhadeep',
};

export default Home;
