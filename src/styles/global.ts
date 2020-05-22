import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #3e3e3e;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    cursor: pointer;
  }
`;
