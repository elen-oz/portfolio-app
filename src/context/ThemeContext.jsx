import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode(!darkMode);
    window.localStorage.setItem('isDarkMode', !darkMode);
    console.log('darkMode', !darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, switchMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
