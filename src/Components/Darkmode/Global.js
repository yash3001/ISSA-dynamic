import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  nav{
    align-items: center;
    background: ${({ theme }) => theme.dark} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  nav *{
    color: ${({ theme }) => theme.text} !important;
  }
  footer{
    align-items: center;
    background: ${({ theme }) => theme.dark} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  footer *{
    color: ${({ theme }) => theme.text} !important;
  }
  
  div .card{
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  div .count{
    background: ${({ theme }) => theme.dark} !important;
  }
  nav ul li{
    background: ${({ theme }) => theme.dark} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  .homepage{
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  .btn{
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  div .our-team{
    background: ${({ theme }) => theme.dark} !important;
  }
  `;