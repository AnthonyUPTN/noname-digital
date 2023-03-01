import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

*,
:before,
:after,  {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

ul {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  width: 100%;
  height: auto;
}
`;
