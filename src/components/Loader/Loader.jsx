import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color={'rgb(245, 146, 86)'}
      />
    </LoaderWrapper>
  );
}
