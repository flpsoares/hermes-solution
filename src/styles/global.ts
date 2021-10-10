import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary: #E1BC5D;
    --background-primary: #131313;
    --background-secondary: #000000;
    --background-tertiary: #080808;
    --text: #D7D7D7;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: var(--text);
    }

  html{
    font-size: 62.5%; /* 10px */
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
  }
  
  button, input{
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  button, input {
    background: 0;
    border: 0;
  }

`
