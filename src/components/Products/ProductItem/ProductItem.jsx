import { MdFavorite } from 'react-icons/md';

import {
  Item,
  Category,
  Img,
  ImgWrapper,
  Price,
  Title,
  DescriptionWrapper,
  Button,
} from './ProductItem.styled';

export default function ProductItem({
  title,
  price,
  category,
  images,
  favorite,
  id,
  func,
}) {
  return (
    <Item>
      <ImgWrapper href="#">
        <Img src={images[0]} alt={title} />
      </ImgWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <Price>${price}</Price>
        <Category>{category}</Category>
      </DescriptionWrapper>
      <Button type="button" onClick={() => func(id)}>
        {!favorite ? (
          <MdFavorite style={{ width: '25', height: '25', fill: '#a7a4a4' }} />
        ) : (
          <MdFavorite style={{ width: '25', height: '25', fill: 'red' }} />
        )}
      </Button>
    </Item>
  );
}
