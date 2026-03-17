import React, { useState, useMemo, createContext } from 'react';
import Header from './components/header';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Footer from './components/footer';
import { Box, CssBaseline, ThemeProvider, useTheme } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import PageLoader from './components/animated/PageLoader';
import { ScrollProgress } from './components/animated/CursorGlow';
import { useReducedMotion } from './animations/hooks/useReducedMotion';

// Create a context so the header can access the toggle function
export const ColorModeContext = createContext({ toggleColorMode: () => { } });

// We break the App into two components to use useTheme inside the inner one
function MainContent() {
    const theme = useTheme();
    const prefersReducedMotion = useReducedMotion();

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            {/* Main Content Area - All sections will stack here for single page scrolling */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Home />
                <About />
                <Project />
                <Contact />
            </Box>

            {/* Footer Area - Pinned to the very bottom */}
            <Footer />

            {/* Scroll Progress Bar */}
            {!prefersReducedMotion && <ScrollProgress color="primary" height={3} />}
        </Box>
    );
}

function App() {
    const [mode, setMode] = useState('light');
    const [isLoading, setIsLoading] = useState(true);

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

    const handleLoadComplete = () => {
        setIsLoading(false);
    };

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <PageLoader isLoading={isLoading} onLoadComplete={handleLoadComplete} minDuration={1500} />
                <MainContent />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;