// Switcher.jsx
import React, { useContext } from 'react';
import { StyleContext } from '../App';

const Switcher = () => {
  // gets the theme and setTheme function from the createContext
  // in order to change the mode
  let { theme, setTheme } = useContext(StyleContext);

  // function to set the new color theme
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      {/* determines whether or not to load the light or dark mode */}
      <div className={`switchCont ${theme === 'light' ? '' : 'darkSwitch'}`}>
        {/* toggles the toggleTheme function after click */}
        <button
          onClick={toggleTheme}
          className={`switchBtn ${theme === 'light' ? '' : 'darkSwitchBtn'}`}
        >
          Change Theme
        </button>
      </div>
    </>
  );
};

export default Switcher;