import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import usePersistedState from './util/usePersistedState';

import Routes from './routes';
import { lightTheme, darkTheme } from './styles/theme';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', lightTheme);
  // eslint-disable-next-line
  const toggleTheme = (): void => {
    if (theme.title === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <BrowserRouter>
          <Routes toggleTheme={toggleTheme} />
        </BrowserRouter>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

export default App;
