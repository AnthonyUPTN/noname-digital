import Container from 'shared/components/Container';
import ProductList from 'components/Products/ProductList';

import { products } from 'products';

export default function HomePage() {
  return (
    <Container>
      <ProductList products={products} />
    </Container>
  );
}
