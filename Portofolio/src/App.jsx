import React, { useState, useMemo, createContext } from 'react';
import Header from './components/header';
import Home from './Pages/Home';
import About from './Pages/About';
import { Box, CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

// Create a context so the header can access the toggle function
export const ColorModeContext = createContext({ toggleColorMode: () => { } });

// We break the App into two components to use useTheme inside the inner one
function MainContent() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Main Content Area - All sections will stack here for single page scrolling */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Home />
        <About />
      </Box>
    </Box>
  );
}

function App() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainContent />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
