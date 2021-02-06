import PropTypes from 'prop-types';

const Home = ({ name }) => (
  <>
    <p>Hello {name} from home</p>
    <h5>Life rocks</h5>
  </>
);

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: 'Sankhadeep',
};

export default Home;
