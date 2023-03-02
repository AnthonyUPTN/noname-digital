import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'shared/components/Container';
import ProductList from 'components/Products/ProductList';

import { getProducts } from 'redux/products/products-operations';
import {
  getAllProducts,
  // getError,
  getLoading,
} from 'redux/products/products-selectors';
import Loader from 'shared/components/Loader';

import { addFavorite } from 'redux/products/products-slice';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log('render homepage');
  const products = useSelector(getAllProducts);
  const loading = useSelector(getLoading);

  const toggleFavorite = id => {
    dispatch(addFavorite(id));
  };

  return (
    <Container>
      {loading && <Loader />}
      {!loading && <ProductList products={products} func={toggleFavorite} />}
    </Container>
  );
}
