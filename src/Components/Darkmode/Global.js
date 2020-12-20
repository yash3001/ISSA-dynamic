import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
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
  .toggle-container{
    background: ${({ theme }) => theme.dark} !important;
    transition: all ease-in-out 1s;
  }
  .navbar{
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
  }
  footer *{
    color: ${({ theme }) => theme.text};
  }
  div .card{
    background: ${({ theme }) => theme.dark} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  div .count{
    background: ${({ theme }) => theme.dark} !important;
  }
  nav ul .nav-items{
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
  div{
    color: ${({ theme }) => theme.text} !important;
  }
  .card-container{
    background: ${({ theme }) => theme.dark} !important;
  }
  .header{
    background-image: ${({ theme }) => theme.gradient},url(/ISSA_Dynamic_Web/static/media/laptop.95fe9b91.webp) !important;
  }
  .countdown-timer{
    background-image: ${({ theme }) => theme.gradient}, url(/ISSA_Dynamic_Web/static/media/5.3f0f7e8c.jpg);
  }
  .fa{
    color: ${({ theme }) => theme.text};
  }
  .suggestionbox span{
    color: ${({ theme }) => theme.dark};
  }
  .suggestionbox{
    background: ${({ theme }) => theme.text} !important;
    color: ${({ theme }) => theme.body};
  }  
  .responsive-iframe{
    background-image: ${({ theme }) => theme.gradient};
  }
  .submit{
    background: ${({ theme }) => theme.text} !important;
    color: ${({ theme }) => theme.body} !important;
  }
  `;