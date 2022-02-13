/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { React, createContext, useState } from 'react';

const ThemeContext = createContext();

// export const ThemeColors = {
//     light: {
//       backgroundColor: '#cccccc',
//       color: '#222222'
//     },
//     dark: {
//       backgroundColor: '#272727',
//       color: '#f6f4e6'
//     }
//   };

function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function changeTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
