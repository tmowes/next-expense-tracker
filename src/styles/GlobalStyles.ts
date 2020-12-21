import { shade, tint } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    height: 100%;
    @media (min-width: 1981px) {
      font-size: 80%;
    }
  }
  body {
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.colors.background};
    color: ${theme.colors.white};
  }
  body,
  #__next {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  #__next {
    height: 100%;
  }
  body,
  input,
  button {
    font: 1.6rem 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    line-height: 1.48;
    border: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }
  a {
    text-decoration: none;
    background: none;
    font-weight: 400;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
    color: ${theme.colors.orange};
    :hover {
      color: ${tint(0.16, theme.colors.orange)};
      text-decoration: underline;
    }
    :active {
      color: ${shade(0.16, theme.colors.orange)};
      text-decoration: underline;
    }
  }
  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`}
`
