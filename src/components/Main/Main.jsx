import { MainWrapper, Banner, Content } from './Main.styled';

export default function Main() {
  return (
    <MainWrapper>
      <Banner />
      <Content>
        <h1>APP</h1>
      </Content>
      <Banner />
    </MainWrapper>
  );
}
