import React from 'react';
import Pagination from '../components/Pagination';
import Products from '../components/Products';

const ProductPage = () => (
  <div>
    <Pagination page={1} />
    <Products />
    <Pagination page={1} />
  </div>
);
export default ProductPage;
