import PropTypes from 'prop-types';

import { List } from './ProductList.styled';

import ProductItem from 'components/Products/ProductItem';

export default function ProductList({ products, func }) {
  const elements = products.map(
    ({ id, title, price, category, images, favorite, toggleFavorite }) => (
      <ProductItem
        key={id}
        id={id}
        title={title}
        price={price}
        category={category}
        images={images}
        favorite={favorite}
        func={func}
      />
    )
  );

  return <List>{elements}</List>;
}

ProductList.defaultProps = {
  products: [],
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

// "id": 1,
//       "title": "iPhone 9",
//       "description": "An apple mobile which is nothing like apple",
//       "price": 549,
//       "discountPercentage": 12.96,
//       "rating": 4.69,
//       "stock": 94,
//       "brand": "Apple",
//       "category": "smartphones",
//       "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//       "images": [
//         "https://i.dummyjson.com/data/products/1/1.jpg",
//         "https://i.dummyjson.com/data/products/1/2.jpg",
//         "https://i.dummyjson.com/data/products/1/3.jpg",
//         "https://i.dummyjson.com/data/products/1/4.jpg",
//         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//       ]
