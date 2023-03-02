import styled from 'styled-components';

export const Item = styled.li`
  padding: 15px;
  margin: 15px;
  position: relative;
  flex-basis: calc((100% / 4) - 65px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0px -1px 16px 1px rgba(34, 60, 80, 0.1);
  min-width: 200px;
  &:hover {
    transform: scale(1.02);
  }
`;

export const ImgWrapper = styled.a`
  margin-bottom: 15px;
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 5px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
`;

export const Price = styled.span`
  font-size: 18px;
  color: green;
  margin-bottom: 5px;
`;

export const Category = styled.span`
  color: #a7a4a4;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;

  width: 40px;
  height: 40px;
  cursor: pointer;

  position: absolute;
  top: 5px;
  right: 5px;

  // & > svg {
  //   fill: #a7a4a4;
  // }

  &:hover {
    background: #eee;
    border: 1px solid #eee;
    border-radius: 50%;
  }
  &: hover> svg {
    fill: red;
  } ;
`;
