import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background: #FFF;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyle;
