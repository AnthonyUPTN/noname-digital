import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #e0e0e0;
`;

export const Text = styled.span`
  margin-right: 5px;
`;

export const Link = styled.a`
  color: red;
  &:hover {
    transform: scale(1.05);
  }
`;
