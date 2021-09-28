import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary: #E1BC5D;
    --background-primary: #131313;
    --background-secondary: #000000;
    --background-tertiary: #080808;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button, input {
    background: 0;
    border: 0;
    cursor: pointer;
  }
`
