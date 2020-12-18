import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Main from "./Routes";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Components/Darkmode/Theme';
import { GlobalStyles } from './Components/Darkmode/Global';
import { useDarkMode } from './Components/Darkmode/useDarkmode';
import Toggle from './Components/Darkmode/Toggle.js';

function App() {

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
    <div>
      <Navbar />
        <Main />
      <Footer />
      <div className='toggle-container'>
      <Toggle theme={theme} toggleTheme={toggleTheme}></Toggle>
      <h3 className='text-center'>It's a {theme === 'light' ? 'light mode' : 'dark mode'}!</h3>
      </div>
    </div>
    <GlobalStyles />
    </>
    </ThemeProvider>
  );
}

export default App;
