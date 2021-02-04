import PropTypes from 'prop-types';

const Home = ({ name }) => <div>Hello {name} from home</div>;

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: 'Sankhadeep',
};

export default Home;
