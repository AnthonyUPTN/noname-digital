import { List } from './ProductList.styled';

// import ProductItem from '../ProductItem';

export default function ProductList({ products }) {
  const elements = products.map(({ id, title, price, category, images }) => (
    <li
      key={id}
      style={{
        // width: '25%',
        padding: '10px',
        border: '1px solid black',
        // display: 'flex',
        // flexDirection: 'column',
        borderRadius: '10px',
        boxShadow: '0px -1px 16px 1px rgba(34, 60, 80, 0.1)',
        owerflow: 'hidden',
      }}
    >
      <a href={'http://htmlbook.ru/html/a/target'}>
        <img
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '5px',
            marginBottom: '15px',
          }}
          src={images[0]}
          alt={title}
        />
      </a>
      <div className="">
        <p>{title}</p>
        <span>{price}</span>
        <span>{category}</span>
      </div>
    </li>
  ));

  return <List>{elements}</List>;
}

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
