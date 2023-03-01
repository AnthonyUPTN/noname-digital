import { MainWrapper, Banner, Content } from './Main.styled';

import MyRoutes from 'components/MyRoutes';

export default function Main() {
  return (
    <MainWrapper>
      <Banner />
      <Content>
        <MyRoutes />
      </Content>
      <Banner />
    </MainWrapper>
  );
}
