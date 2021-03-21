/* eslint-disable react/prop-types */
import UpdateProduct from '../components/UpdateProduct';

const Update = ({ query }) => (
  <div>
    <UpdateProduct id={query.id} />
  </div>
);

export default Update;
