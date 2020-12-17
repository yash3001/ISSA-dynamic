import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import ToggleContainer from './Toggle.styled'

// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from '../Darkmode/icons/moon.svg';
import { ReactComponent as SunIcon } from '../Darkmode/icons/sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;