import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/header';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Footer from './components/footer';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import PageLoader from './components/animated/PageLoader';
import { ScrollProgress } from './components/animated/CursorGlow';
import { useReducedMotion } from './animations/hooks/useReducedMotion';
import GTRTireBackground from './components/animated/GTRTireBackground';
import ScrollToTopTire from './components/animated/ScrollToTopTire';
import { ColorModeContext } from './context/ColorModeContext';

// We break the App into two components to use useTheme inside the inner one
function MainContent() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <GTRTireBackground />
            
            {/* Wrap the entire overlaying DOM in zIndex 1 so it sits cleanly over the fixed 3D canvas without clipping */}
            <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flexGrow: 1, pointerEvents: 'none' }}>
                {/* We re-enable pointer events for the interactive DOM so the user can click buttons and links */}
                <Box sx={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Header />

                    <Box component="main" sx={{ flexGrow: 1 }}>
                <Home />
                <About />
                <Project />
                <Contact />
            </Box>

            {/* Footer Area - Pinned to the very bottom */}
            <Footer />

                    {/* Scroll Progress Bar */}
                    {!prefersReducedMotion && (window.innerWidth >= 768) && <ScrollProgress color="primary" height={3} />}
                    <ScrollToTopTire />
                </Box>
            </Box>
        </Box>
    );
}

function App() {
    const [mode, setMode] = useState(() => {
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setMode(e.matches ? 'dark' : 'light');
        
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Sync data-theme for index.css scrollbar styling
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);

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