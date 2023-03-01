import { FooterWrapper, Text, Link } from './Footer.styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <Text>This test task made by Anton for:</Text>
      <Link href="https://noname.digital/" rel="noreferrer " target="_blank">
        NONAME DIGITAL
      </Link>
    </FooterWrapper>
  );
}
