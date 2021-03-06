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
    scroll-padding-top: 60px;
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

  ::-webkit-scrollbar {
      width: 12px;
      background: rgba(0, 0, 0, 0.9);
    }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.9);
    border-radius: 12px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 10px;
    
    &:hover {
      background: #D8A82E;
    }
  }

`
