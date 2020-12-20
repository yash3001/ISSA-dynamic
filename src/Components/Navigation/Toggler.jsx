import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Darkmode/Theme';
import { GlobalStyles } from '../Darkmode/Global';
import { useDarkMode } from '../Darkmode/useDarkmode';
import Toggle from '../Darkmode/Toggle.js';

function Toggler(props){

    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return(
        <ThemeProvider theme={themeMode}>
      <>
        <label htmlFor="navi-toggle" className="navigation__button">
        <Toggle theme={theme} toggleTheme={toggleTheme}></Toggle>
        </label>
        <GlobalStyles />
    </>
    </ThemeProvider>
    );
}
export default Toggler;